# Introduction

Live demo [here](https://cvme.notathoughtexperiment.me/). Enter your GitHub username the web app queries GitHub's v4 graphQL API to generate a little CV from your GitHub profile.

Click on your bio to log into your GitHub account. It'll redirect you back to the landing page. Enter your username again, and click on your bio again. This time, a form will pop up and you can edit your GitHub username from here. No submit button. Click away from the form to submit (it's a small UX experiment for me). It sends a POST request to GitHub's v3 API endpoint to change your GitHub bio.

# Setup

There are three parts to setting up this project. The first is the minimum that allows the web app to work and the other two are just to allow for POST requests to the GitHub API. Skip the other two if you don't need to change user GitHub bios.

## Minimum setup

### Environment variables

Set up these environment variables in a .env file in the project root directory or in the OS itself:

- REACT_APP_GITHUB_ACCESS_TOKEN: Get your access token from GitHub [here](https://github.com/settings/tokens).

- REACT_APP_GITHUB_APP_CLIENT_ID: Only required for POST requests. Get it from your OAuth app in GitHub developer settings after setting it up.

- REACT_APP_REDIRECT_URL: Only required for POST requests. Must be the same redirect URL as set in your OAuth app in GitHub [developer settings](https://github.com/settings/developers).

### Run with Docker

A dev.Dockerfile and a docker-compose.yml file have been provided in the root directory so you can grab these if you don't want to `git clone` the whole repo.

After setting up environment variables as shown above, run `docker-compose up` from /src and Docker will set up a docker container and start up the dev server.

You can access it at localhost:8001.

### Deploy

Alternatively, `git clone` or fork the repo and deploy it wherever you like.

The live demo front end is served from Netlify.

## Required for POST requests

### Set up OAuth app in GitHub

Create and OAuth app in GitHub [developer settings](https://github.com/settings/developers).

Set the "Authorization callback URL" to the app's top level URL. You'll need this same URL for the REACT_APP_REDIRECT_URL environment variable later.

Note the client ID and secret for the next step.

### Set up Gatekeeper

Ideally, we shouldn't communicate OAuth credentials over a browser. But we also don't want to set up our own back end to do that right now. For a quick solution, deploy Gatekeeper to Heroku with this [convenient button](https://github.com/prose/gatekeeper#deploy-on-heroku). You'll have to fill in your GitHub OAuth app client ID and secret (see previous step).

# Insecure connection error

If you serve this over https in development, you might encounter a security error about your insecure websocket connection. If so, open up node_modules/react-dev-utils/webpackHotDevClient.js and go to:

```
// Connect to WebpackDevServer via a socket.
var connection = new WebSocket(
  url.format({
    protocol: 'ws',
    hostname: window.location.hostname,
    port: window.location.port,
    // Hardcoded in WebpackDevServer
    pathname: '/sockjs-node',
  })
);
```

Change `protocol: 'ws',` to `protocol: location.protocol === "https:" ? 'wss' : 'ws',`.

# Some important libraries

GraphQL by Apollo.

Styling by Bulma and SCSS.

Tests by Jest and react-testing-library.

# Main structure

Not counting the About page (handled by src/About.js) there are two main pages: the landing page (Landing.js) and the CV page (CV.js).

## Landing.js

Landing.js uses `getGitHubProfile()` to access GitHub's v4 graphQL API via the Apollo client. This fetches the user's GitHub profile.

## CV.js

The profile is passed down to CV.js, which renders it.

On clicking the bio, a GitHub login link appears. User can authenticate with GitHub here and get redirected back to the landing page. User can re-enter their username again to get their profile. The next time they click on their bio, it will bring up a form.

Filling in this form and clicking away triggers `handleBlur()` in CV.js. This sends a PATCH request to GitHub's v3 API to update the user's bio.

# Possible developments

- Allow users to pick between different CV styles
- Draw user data from other APIs
- Rework GitHub login so users don't have to enter their username and click on their bio twice
- Mock API calls

# Some learning sources

How to authenticate with GitHub on behalf of users using Heroku as a makeshift back end: [Implementing GitHub OAuth Flow in React](https://www.graphql.college/implementing-github-oauth-flow/)

[Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)

Set form input value with Enzyme (none of these worked): [1](https://github.com/airbnb/enzyme/issues/76), [2](https://stackoverflow.com/questions/37219772/enzyme-how-to-access-and-set-input-value)

## Security

I researched GitHub's security advisories thinking it might be cool to matplotlib into a Jupyter notebook the moving averages of dates when CVE's were announced. But I realised maybe it's not that cool, so I dropped the idea. These are recorded here anyway in case I want to reference them one day.

[Behind the scenes: GitHub security alerts](https://github.blog/2019-12-11-behind-the-scenes-github-vulnerability-alerts/)

[Browsing security vulnerabilities in the GitHub Advisory Database](https://help.github.com/en/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)

[GraphQL API v4 - Accessing RepositoryVulnerabilityAlert](https://github.community/t5/GitHub-API-Development-and/GraphQL-API-v4-Accessing-RepositoryVulnerabilityAlert/td-p/19008)
