# Create bucket
resource "aws_s3_bucket" "secret-keys" {
    bucket = "${var.bucket_name}" 
    acl = "${var.acl_value}"   
}

# Upload an key
resource "aws_s3_bucket_object" "object" {
    bucket = aws_s3_bucket.secret-keys.id 
    key = ".env"
    acl = "${var.acl_value}"   
    source = "../.env"
    etag = filemd5("../.env")
}
