<h1 align="center"><a href="https://egghead.io/courses/build-an-app-with-the-aws-cloud-development-kit?af=6p5abz">Build an App with the AWS Cloud Development Kit</a></h1>

<p align="center"><img src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/450/full/EGH_AWS-TS.png" width="340"></p>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## About 🔍

This repo contains notes from [Tomasz Łakomy](https://twitter.com/tlakomy)'s Egghead course [Build an App with the AWS Cloud Development Kit](https://egghead.io/courses/build-an-app-with-the-aws-cloud-development-kit?af=6p5abz).

These notes contain the same structure as the transcriptions, along with additional rewrites, links to resources, and personal takes on the lesson. Feel free to submit additions to these notes, but please don't remove anything (unless we messed up or misunderstood something).

Generally, there is one document for each lesson in the course. If there are related lessons, the notes will be in the same document.

## Course Objective 💪

You've probably already heard of cloud computing, `aws`, `lambda` functions, `s3` buckets, but have no idea what those things are. Good news! This course serve as an introduction to all of these things and more!

You'll learn how to deploy a `cdk` template, write your first `lambda` function, initialize a new `s3` bucket to store your assets, save things in a NoSQL database called `dynamoDB`, connect a `react` application to your backend and deploy all of it to a CDN!

By the end of the course you'll not only have a good understanding of (some of) `aws` features, you'll also have a working application deployed live on the internet.

## Prerequisites ✅
During this course we're going to talk quite a bit about AWS Lambda, DynamoDB and we're going to play with AWS SAM a bit. This is not required but I think you will get more out of the course if you take a look at those resources first (don't worry - I will be explaning those concepts during the course as well):

[🤔 Tomasz's notes](https://gist.github.com/tlakomy/f1312ec1fd092ece75a0f72403235fc8) and [workshop docs](https://github.com/tlakomy/egghead-aws-cdk-workshop/tree/master/docs)

| Learn AWS Lambda from scratch                                                             | Learn AWS Serverless Application Model (AWS SAM) from scratch                                                                     | Learn DynamoDB from scratch                                                                 | Intro to DynamoDB by [Chris Biscardi](https://egghead.io/instructors/chris-biscardi?af=6p5abz) |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [📹 Collection](https://egghead.io/playlists/learn-aws-lambda-from-scratch-d29d?af=6p5abz) | [📹 Collection](https://egghead.io/playlists/learn-aws-serverless-application-model-aws-sam-framework-from-scratch-baf9?af=6p5abz) | [📹 Collection](https://egghead.io/playlists/learn-aws-dynamodb-from-scratch-21c3?af=6p5abz) | [📹 Collection](https://egghead.io/playlists/learn-aws-dynamodb-from-scratch-21c3?af=6p5abz)    |
| [🤔 Notes](https://github.com/theianjones/egghead.io_learn_aws_lambda_from_scratch)        |                                       [🤔 Notes](https://github.com/eggheadio-projects/build-serverless-applications-with-aws-sam) |            [🤔 Notes](https://github.com/eggheadio-projects/learn-aws-dynamodb-from-scratch) |                             [🤔 Notes](https://github.com/eggheadio-projects/intro-to-dynamodb) |


## Who is Tomasz Łakomy? 👨‍💻

Senior Frontend Engineer at OLX Group. His interests include React, AWS, testing, Svelte, VR, app performance and... jQuery, which he still thinks is the best library ever.

[Other Egghead content](https://egghead.io/instructors/tomasz-lakomy) created by Tomasz.

## Table of Contents 📜

- [00-Intro and Welcome](00-intro-and-welcome.md)
- [01-Install AWS Cloud Development Kit (CDK) and create a new project](01-install-aws-cloud-development-kit-cdk-and-create-a-new-project.md)
- [02-Build and deploy a sample AWS Cloud Development Kit stack to AWS](02-build-and-deploy-a-sample-aws-cloud-development-kit-stack-to-aws.md)
- [03-Review an AWS CloudFormation stack deployed with AWS CDK](03-review-an-aws-cloud-formation-stack-deployed-with-aws-cdk.md)
- [04-Clear an initial AWS CDK stack to start building an app from scratch](04-clear-an-initial-aws-cdk-stack-to-start-building-an-app-from-scratch.md)
- [05-Create and deploy a lambda function with AWS CDK](05-create-and-deploy-a-lambda-function-with-aws-cdk.md)
- [06-Review and execute a lambda function deployed with CDK in AWS Console](06-review-and-execute-a-lambda-function-deployed-with-cdk-in-aws-console.md)
- [07-Change the properties of a lambda function deployed with AWS CDK](07-change-the-properties-of-a-lambda-function-deployed-with-aws-cdk.md)
- [08-Attach an API Gateway to a lambda function deployed with AWS CDK](08-attach-an-api-gateway-to-a-lambda-function-deployed-with-aws-cdk.md)
- [09-Pass environment variables to a lambda function deployed with AWS CDK](09-pass-environment-variables-to-a-lambda-function-deployed-with-aws-cdk.md)
- [10-Run lambda functions built with CDK locally using AWS SAM](10-run-lambda-functions-built-with-cdk-locally-using-aws-sam.md)
- [11-Create and deploy an S3 bucket with AWS CDK](11-create-and-deploy-an-s3-bucket-with-aws-cdk.md)
- [12-Make the contents of an S3 bucket deployed with CDK public](12-make-the-contents-of-an-s3-bucket-deployed-with-cdk-public.md)
- [13-Create an S3 event notification to trigger a lambda function on file upload](13-create-an-s3-event-notification-to-trigger-a-lambda-function-on-file-upload.md)
- [14-Use a bucket deployment to upload a file to S3 when deploying a CDK stack](14-use-a-bucket-deployment-to-upload-a-file-to-s3-when-deploying-a-cdk-stack.md)
- [15-Create a custom AWS CDK construct](15-create-a-custom-aws-cdk-construct.md)
- [16-Create a DynamoDB table with AWS CDK](16-create-a-dynamo-db-table-with-aws-cdk.md)
- [17-Get all items from a DynamoDB table deployed with CDK using DocumentClient API](17-get-all-items-from-a-dynamo-db-table-deployed-with-cdk-using-document-client-api.md)
- [18-Debug permission issues and allow a lambda function to access data from a DynamoDB table](18-debug-permission-issues-and-allow-a-lambda-function-to-access-data-from-a-dynamo-db-table.md)
- [19-Adding data to a DynamoDB table with put operation](19-adding-data-to-a-dynamo-db-table-with-put-operation.md)
- [20-Delete an item from a DynamoDB table with delete operation](20-delete-an-item-from-a-dynamo-db-table-with-delete-operation.md)
- [21-Add external dependencies to an AWS Lambda function deployed with CDK](21-add-external-dependencies-to-an-aws-lambda-function-deployed-with-cdk.md)
- [22-Connect React app to a serverless backend deployed with CDK and fix CORS issues](22-connect-react-app-to-a-serverless-backend-deployed-with-cdk-and-fix-cors-issues.md)
- [23-Add a custom CloudFormation stack output with CDK](23-add-a-custom-cloud-formation-stack-output-with-cdk.md)
- [24-Deploy a static website to S3 with AWS CDK](24-deploy-a-static-website-to-s3-with-aws-cdk.md)
- [25-Deploy a site with HTTPS support behind a CDN with CDK](25-deploy-a-site-with-https-support-behind-a-cdn-with-cdk.md)
- [26-Destroy an AWS CDK stack](26-destroy-an-aws-cdk-stack.md)

## Emoji Legend 🧠

| emoji| explanation              |
| -----|:------------------------:|
| 📹   | links to the course video|
| 💻   | course repository        |
| ⌨️    | keyboard shortcut        |
| 🤔   | additional resources     |
| 👍   | good practice            |


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://laurosilva.com"><img src="https://avatars2.githubusercontent.com/u/57044804?v=4" width="100px;" alt=""/><br /><sub><b>Lauro Silva</b></sub></a><br /><a href="https://github.com/eggheadio-projects/build-an-app-with-the-AWS-cloud-development-kit-notes/pulls?q=is%3Apr+reviewed-by%3Alaurosilvacom" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://includejs.dev"><img src="https://avatars3.githubusercontent.com/u/17270662?v=4" width="100px;" alt=""/><br /><sub><b>edieblu</b></sub></a><br /><a href="#content-edieblu" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
