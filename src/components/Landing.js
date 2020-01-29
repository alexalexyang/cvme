import React, { useState } from "react";
import { userQuery } from "./githubGraphql";
import GitHubProfile from "./GitHubProfile";
import { client } from "../index";

function Landing() {
  const code =
    window.location.href.match(/\?code=(.*)/) &&
    window.location.href.match(/\?code=(.*)/)[1];
  console.log("GitHub code: ", code);

  if (code) {
    fetch(`https://cv4me.herokuapp.com/authenticate/${code}`)
      .then(response => response.json())
      .then(({ token }) => {
        console.log("Token: ", token);
      });
  }

  const [userLogin, setUserLogin] = useState("");
  const [user, setUser] = useState();

  const submitUserLogin = async e => {
    e.preventDefault();
    client
      .query({ query: userQuery, variables: { login: "alexalexyang" } })
      .then(response => setUser(response.data.user))
      .catch(err => console.log(err));
  };

  const gitHubLoginForm = () => {
    return (
      <div className="section page-wrapper">
        <div className="container form-wrapper">
          <form className="form field has-addons" onSubmit={submitUserLogin}>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="What's your GitHub username?"
                onChange={e => setUserLogin(e.target.value)}
              />
              <span className="icon is-small is-left">
                <svg
                  className="rotate"
                  width="24"
                  height="24"
                  fill="silver"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />{" "}
                </svg>
              </span>
            </div>
            <div className="control">
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <p>
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_APP_CLIENT_ID}&scope=user&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`}
            >
              Login at GitHub
            </a>
          </p>
        </div>
      </div>
    );
  };

  return user ? <GitHubProfile user={user} /> : gitHubLoginForm();
}

export default Landing;
