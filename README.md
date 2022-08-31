# Next Google Photos

## Description

Consuming the Google Photos Library API : Access private Albums and Media Items

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

[Google Photos APIs - Overview](https://developers.google.com/photos/library/guides/overview)  
[Google Photos APIs - Resource summary](https://developers.google.com/photos/library/reference/rest)  
[Google Identity - Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2)  
[Google Cloud Credentials - APIs & Services](https://console.cloud.google.com/apis/credentials)  
[Google Account Settings - Permissions](https://myaccount.google.com/permissions)  
[GitHub - Google APIs Node.js Client](https://github.com/googleapis/google-api-nodejs-client)  
[YouTube - Bring the best of Google Photos to your app](https://www.youtube.com/watch?v=KIFfibtzaEo&ab_channel=GoogleDevelopers)  
