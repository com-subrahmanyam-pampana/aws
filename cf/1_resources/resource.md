# Resource:
Cloud formation template should contain atlease 1 resource.
Eg:
Resources:
    MyS3PrivateBucket:
      Type: AWS::S3::Bucket
      Properties:
        AccessControl: Private
        BucketName: "test-bucket-from-clouf-formation-template" 
      
    MyEC2Instance:
       Type: AWS::EC2::Instance
       Properties:
         AvailabilityZone: us-east-1a
         ImageId: ami-0742b4e673072066f
         InstanceType: t2.micro
The above one create a S3 bucket and a EC2 instance         