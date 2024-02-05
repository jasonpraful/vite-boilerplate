variable "aws_access_key" {
  description = "The access key for the AWS account"
  type        = string
  sensitive   = true
}

variable "aws_secret_key" {
  description = "The secret key for the AWS account"
  type        = string
  sensitive   = true
}

variable "fe_bucket_name" {
  description = "The name of the S3 bucket to hold the frontend assets"
  type        = string
  default     = "frontend-assets"
}

variable "cloudfront_price_class" {
  description = "The price class for the CloudFront distribution"
  type        = string
  default     = "PriceClass_100" # US, Canada, Europe
}

variable "cloudfront_cache_policy_id" {
  description = "The ID of the cache policy to use for the CloudFront distribution"
  type        = string
  default     = "658327ea-f89d-4fab-a63d-7e88639e58f6" # AWS managed for Static Web Apps (S3)
}


