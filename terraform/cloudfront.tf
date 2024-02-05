resource "aws_cloudfront_origin_access_identity" "cf_s3_origin_access_identity" {
  comment = "Allow CloudFront to reach the S3 bucket"
}

resource "aws_cloudfront_distribution" "frontend_cdn" {
  depends_on      = [aws_s3_bucket.frontend_s3_bucket]
  enabled         = true
  is_ipv6_enabled = true

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  origin {
    domain_name = aws_s3_bucket.frontend_s3_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.frontend_s3_bucket.id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.cf_s3_origin_access_identity.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods        = ["HEAD", "DELETE", "POST", "GET", "OPTIONS", "PUT", "PATCH"]
    cached_methods         = ["HEAD", "GET"]
    cache_policy_id        = var.cloudfront_cache_policy_id
    target_origin_id       = aws_s3_bucket.frontend_s3_bucket.id
    viewer_protocol_policy = "redirect-to-https"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  dynamic "custom_error_response" {
    for_each = [403, 404]
    content {
      error_caching_min_ttl = 0
      error_code            = custom_error_response.value
      response_code         = custom_error_response.value
      response_page_path    = "/index.html"
    }
  }
  default_root_object = "index.html"
  price_class         = var.cloudfront_price_class
}
