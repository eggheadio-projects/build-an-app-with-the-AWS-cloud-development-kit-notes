import * as cdk from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as lambda from "@aws-cdk/aws-lambda";

export class Backend extends cdk.Construct {
  public readonly handler: lambda.Function;

  constructor(scope: cdk.App, id: string) {
    super(scope, id);
    // TODO: Create a reference to dynamodb!

    // TODO: Create a reference to your lambda function
  } 
}
