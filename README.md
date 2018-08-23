# Sample project for sample ORE-Enabled API

This project provides an example endpoint that is protected by ORE
- This endpoint exposes a single api endpoint: `apiaction`
- This endpoint accepts a single parameter: `myparam`

## Setup Developer Environment

Install Google Cloud CLI [from here](https://cloud.google.com/sdk/docs/quickstart-macos)

Update the app.yaml file to reflect the service name for your deployed endpoint (change from 'hello-ore' to your desired name)

## To Run Locally

```
npm install
node index.js
```

Example call: http://localhost:8080/apiaction?myparam=examplevalue


## To Deploy to Google App Engine

`Google App Engine`

Use GCloud to switch to right project (you must first create a project via Google Cloud's App Engine)
```
gcloud config set project {yourProjectName}
```
Deploy to Production or Staging
```
npm run deploy
```

Example call to google app engine hosted endpoint: 
https://hello-ore-dot-{yourProjectName}.appspot.com/apiaction?myparam=examplevalue


## To test API using ORE blockchain

The API must be published on the ORE Blockchain. Provide the requested information to the Aikon team. You'll then be able to test using the example client code and a config file that you'll download for your api from the api.market website

## Notes

To update the apimarket library package after a code update...
```
npm upgrade @apimarket/apimarket-server
```
