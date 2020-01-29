# Insecure connection error

If you serve this over https, you might encounter a security error about your insecure websocket connection. If so, open up node_modules/react-dev-utils/webpackHotDevClient.js and go to:

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

# Basic setup

GraphQL is handled by Apollo. Styling by Bulma and SCSS.

# Learning sources

How to authenticate with GitHub on behalf of users using Heroku as a makeshift back end: [Implementing GitHub OAuth Flow in React](https://www.graphql.college/implementing-github-oauth-flow/)

## Security

I researched GitHub's security advisories thinking it might be cool to matplotlib into a Jupyter notebook the moving averages of dates when CVE's were announced. But I realised maybe it's not that cool, so I dropped the idea. These are recorded here anyway in case I want to reference them one day.

[Behind the scenes: GitHub security alerts](https://github.blog/2019-12-11-behind-the-scenes-github-vulnerability-alerts/)

[Browsing security vulnerabilities in the GitHub Advisory Database](https://help.github.com/en/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)

[GraphQL API v4 - Accessing RepositoryVulnerabilityAlert](https://github.community/t5/GitHub-API-Development-and/GraphQL-API-v4-Accessing-RepositoryVulnerabilityAlert/td-p/19008)
