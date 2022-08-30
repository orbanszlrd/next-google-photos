# Next Google Photos

## Description

Web Application to access your public and private Photos on Google.

## Website

[photos.dinodev.hu](https://photos.dinodev.hu/)  

## Development

### Prerequisites

Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), the free and open source distributed version control system.  
Install [Node.js](https://nodejs.org/) which includes Node Package Manager.  

### Clone and Install

Run `git clone git@github.com:orbanszlrd/next-google-photos.git` to clone the repository from [GitHub](https://github.com/orbanszlrd/next-google-photos).  

### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Setup the Environment Variables

- Visit the [Google API Console](https://console.cloud.google.com/) to obtain OAuth 2.0 credentials such as a client ID and client secret that are known to both Google and your application.

```log
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GOOGLE_REFRESH_TOKEN=<your-google-client-refresh-token>
GOOGLE_GRANT_TYPE="refresh_token"
```

## Useful Links

[Google Photos APIs](https://developers.google.com/photos/library/guides/get-started)  
[Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2)  
[GCP Credentials - APIs & Services](https://console.cloud.google.com/apis/credentials)  
[Google Account Permissions](https://myaccount.google.com/permissions)  
[Google APIs Node.js Client](https://github.com/googleapis/google-api-nodejs-client)  
