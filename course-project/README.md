# The Project

## The Brief

Our client wants to build up a subscriber list to market their new product. The client is paying for AWS and wants us to use it for this project. You are a full-stack engineer and your project manager has tasked you with finding a way to store all the subscriber's emails and creating a way to capture subscriber emails.

The frontend team has come up with a couple of prototypes for the frontend form. You could either wire up one of their prototypes or roll your own!

Your project manager recommends you use the command `cdk init` to save time. AWS CDK converts into JSON/YAML so the language you implement this feature is completely up to you!

## Requirements:

- [ ] Wire up a form for users to input their email
- [ ] Handle user input with AWS Lambda
- [ ] Store that email on AWS using DynamoDB

### Stretch Goals
- [ ] Display emails on the page
- [ ] Delete emails from the list
- [ ] Add the company logo to the form

## Project Steps

Create a frontend that takes user input and POSTs to your AWS endpoint.

Create a lambda function that handles POST requests and adds data to your dynamodb table. 

Create a construct that creates the DynamoDB table and includes the lambda function for handling requests

Create a stack that deploys your front end, includes your construct, and creates an API gateway for your lambda function.

## Form Prototypes

- [React form](https://codesandbox.io/s/nervous-lalande-m9xgb?file=/src/App.js)
- [Vue form](https://github.com/Creeland/AWS-CDK-Vue-Frontend)

## Project Boilerplate

Your team has a suggested configuration for this type of project. You can browse or copy the [project boilerplate code](./boilerplate) that has the set up done for you if you don't want to start completely from scratch.
