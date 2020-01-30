# Setup

There are three parts to setting up this project. The first is required and the other two are just to allow for POST requests to the GitHub API. Skip the other two if you don't need to change user GitHub bios.

## Required setup

### Environment variables

Set up these environment variables:

- REACT_APP_GITHUB_ACCESS_TOKEN: Get your access token from GitHub [here](https://github.com/settings/tokens).

- REACT_APP_GITHUB_APP_CLIENT_ID: Only required for POST requests. Get it from your OAuth app in GitHub developer settings after setting it up.

- REACT_APP_REDIRECT_URL: Only required for POST requests. Must be the same redirect URL as set in your OAuth app in GitHub [developer settings](https://github.com/settings/developers).

### Deploy

Deploy it.

## Required for POST requests

### Set up OAuth app in GitHub

Create and OAuth app in GitHub [developer settings](https://github.com/settings/developers).

Set the "Authorization callback URL" to the app's top level URL. You'll need this same URL for the REACT_APP_REDIRECT_URL environment variable later.

Note the client ID and secret for the next step.

### Set up Gatekeeper

Ideally, we shouldn't communicate OAuth credentials over a browser. But we also don't want to set up our own back end to do that. For a quick solution, deploy Gatekeeper to Heroku with this [convenient button](https://github.com/prose/gatekeeper#deploy-on-heroku). You'll have to fill in your GitHub OAuth app client ID and secret (from above).

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

Tests by Jest and Enzyme.

# Some learning sources

How to authenticate with GitHub on behalf of users using Heroku as a makeshift back end: [Implementing GitHub OAuth Flow in React](https://www.graphql.college/implementing-github-oauth-flow/)

[Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)

Set form input value with Enzyme: [1](https://github.com/airbnb/enzyme/issues/76), [2](https://stackoverflow.com/questions/37219772/enzyme-how-to-access-and-set-input-value)

## Security

I researched GitHub's security advisories thinking it might be cool to matplotlib into a Jupyter notebook the moving averages of dates when CVE's were announced. But I realised maybe it's not that cool, so I dropped the idea. These are recorded here anyway in case I want to reference them one day.

[Behind the scenes: GitHub security alerts](https://github.blog/2019-12-11-behind-the-scenes-github-vulnerability-alerts/)

[Browsing security vulnerabilities in the GitHub Advisory Database](https://help.github.com/en/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)

[GraphQL API v4 - Accessing RepositoryVulnerabilityAlert](https://github.community/t5/GitHub-API-Development-and/GraphQL-API-v4-Accessing-RepositoryVulnerabilityAlert/td-p/19008)
