terraform {
  # if you plan to use a remote backend, you can define it here
  # a remote backend is a storage location for the Terraform state.

  # if you do not plan to use managed terraform cloud to store the state, delete the following block
  # https://developer.hashicorp.com/terraform/cloud-docs
  cloud {
    organization = "jasonpraful"
    workspaces {
      name = "vite-boilerplate"
    }
  }

  # if you plan to use AWS S3 as a remote backend, uncomment the following block
  #   backend "s3" {
  #     bucket = "terraform-state-bucket"
  #     key    = "terraform.tfstate"
  #     region = local.aws_region
  #   }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.56.0"
    }
  }
}

provider "aws" {
  region     = local.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  default_tags {
    tags = {
      Project = local.project_name
    }
  }
}



