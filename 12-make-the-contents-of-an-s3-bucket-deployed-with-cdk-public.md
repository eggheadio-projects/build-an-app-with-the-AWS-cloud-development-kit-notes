# Make the contents of an S3 bucket deployed with CDK public

**[📹 Video](https://egghead.io/lessons/aws-make-the-contents-of-an-s3-bucket-deployed-with-cdk-public)**

 By default, an `s3` bucket is secure and publicly inaccessible. To fix that, we'll have to add a single property to our `LogoBucket`.

 ```ts
const logoBucket = new s3.Bucket(this, "LogoBucket", {
      publicReadAccess: true
  });
```

Once deployed, our `s3` links will be available to everyone.