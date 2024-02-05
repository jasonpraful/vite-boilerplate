output "cloudfront_website" {
  value = aws_cloudfront_distribution.frontend_cdn.domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.frontend_s3_bucket.bucket
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.frontend_cdn.id
}
