import React from "react";

function GitHubLogin({ setToken }) {
  const code =
    window.location.href.match(/\?code=(.*)/) &&
    window.location.href.match(/\?code=(.*)/)[1];

  if (code) {
    fetch(`https://cv4me.herokuapp.com/authenticate/${code}`)
      .then(response => {
        return response.json();
      })
      .then(({ token }) => {
        setToken(token);
      });
  }

  return (
    <div className="section">
      <div className="container">
        <p>
          <a
            data-testid="github-link"
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_APP_CLIENT_ID}&scope=user&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`}
          >
            Login at GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default GitHubLogin;
