##################################
# Bucket to hold Frontend assets #
##################################

resource "aws_s3_bucket" "frontend_s3_bucket" {
  bucket        = var.fe_bucket_name
  force_destroy = true

  lifecycle {
    prevent_destroy = false
  }
}


resource "aws_s3_bucket_website_configuration" "frontend_s3_bucket_website" {
  bucket = aws_s3_bucket.frontend_s3_bucket.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    # we expect react-router to handle 404s
    key = "index.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "frontend_s3_bucket_object_ownership" {
  bucket = aws_s3_bucket.frontend_s3_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}
resource "aws_s3_bucket_acl" "frontend_s3_bucket_acl" {
  depends_on = [aws_s3_bucket_ownership_controls.frontend_s3_bucket_object_ownership]
  bucket     = aws_s3_bucket.frontend_s3_bucket.id
  acl        = "private"
}

###################################
# IAM policy to allow cloudfront  #
# to access the frontend assets   #
###################################

resource "aws_s3_bucket_policy" "frontend_s3_bucket_policy" {
  bucket = aws_s3_bucket.frontend_s3_bucket.id
  policy = data.aws_iam_policy_document.s3_bucket_policy.json
}
