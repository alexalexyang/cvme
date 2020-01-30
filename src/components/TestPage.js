import React, { useState } from "react";

function TestPage() {
  const [token, setToken] = useState();
  const code =
    window.location.href.match(/\?code=(.*)/) &&
    window.location.href.match(/\?code=(.*)/)[1];

  console.log("GitHub code: ", code);

  if (code) {
    fetch(`https://cv4me.herokuapp.com/authenticate/${code}`)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(({ token }) => {
        console.log("Token: ", token);
        setToken(token);
      });
  }

  if (token) {
    console.log("Token (patch): ", token);
    fetch(` https://api.github.com/user`, {
      method: "PATCH",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bio: "Testing changing of bio."
      })
    });
  }

  return (
    <div className="section">
      <div className="container">
        <p>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_APP_CLIENT_ID}&scope=user&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}/testpage`}
          >
            Login at GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default TestPage;
