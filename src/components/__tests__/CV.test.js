import CV from "../CV";

const user = {
  avatarUrl: "https://avatars0.githubusercontent.com/u/28531428?v=4",
  name: "Billie",
  location: "Kutaisi, Georgia",
  email: "billy@madeupemail.totallymadeup.xyz",
  url: "https://github.com/madeupbillieperson",
  websiteUrl: "https://billie-thetotallymadeupperson.xyz",
  bio: "A wonderful programmer who loves swimming.",
  pinnedItems: {
    edges: [
      {
        node: {
          id: "MDEwOlJlcG9zaXRvcnkyMzE0Nzk0MDc=",
          name: "supermeowkat",
          description: "Art gallery X blog with Gatsby/React, Bulma, SCSS.",
          homepageUrl: "https://supermeowkate.notathoughtexperiment.me"
        }
      },
      {
        node: {
          id: "MDEwOlJlcG9zaXRvcnkyMTk2MjQzMzc=",
          name: "sellouts-frontend",
          description:
            "JAMstack e-commerce solution with React, Contentful, and PayPal.",
          homepageUrl: null
        }
      },
      {
        node: {
          id: "MDEwOlJlcG9zaXRvcnkxODc1MzE2NDI=",
          name: "hayat",
          description: "My attempt to build a chat SAAS.",
          homepageUrl: null
        }
      },
      {
        node: {
          id: "MDEwOlJlcG9zaXRvcnkyMjE1ODQ1MTA=",
          name: "botschaft_backend",
          description:
            "Node.js back end for Botschaft, a platform for bots to run around the world.",
          homepageUrl: ""
        }
      }
    ]
  }
};

const userMissingData = {
  avatarUrl: "https://avatars0.githubusercontent.com/u/28531428?v=4",
  name: "Neko Neko",
  location: "Okinawa, Japan",
  pinnedItems: {
    edges: [
      {
        node: {
          id: "MDEwOlJlcG9zaXRvcnkyMzE0Nzk0MDc=",
          name: "supermeowkat",
          description: "Art gallery X blog with Gatsby/React, Bulma, SCSS.",
          homepageUrl: "https://supermeowkate.notathoughtexperiment.me"
        }
      }
    ]
  }
};

afterEach(cleanup);

it("Renders user data", () => {
  const { getByTestId } = render(<CV user={user} />);
  const target = getByTestId("bio");
  expect(target).toHaveTextContent(
    "A wonderful programmer who loves swimming."
  );
});

it("Renders empty string where user properties are missing", () => {
  const { getByTestId } = render(<CV user={userMissingData} />);
  const bio = getByTestId("bio");
  expect(bio).toHaveTextContent("");
});

it("Bio exists and GitHub login does not", () => {
  const { queryByTestId } = render(<CV user={user} />);
  const bio = queryByTestId("bio");
  const githubLink = queryByTestId("github-link");
  expect(githubLink).toBeNull();
  expect(bio).toBeTruthy();
});

it("Bio goes away on click and GitHub login takes its place", () => {
  const { getByTestId, queryByTestId } = render(<CV user={user} />);
  const bio = getByTestId("bio");
  fireEvent.click(bio);
  const githubLink = queryByTestId("github-link");
  const bioExists = queryByTestId("bio");
  expect(githubLink).toBeTruthy();
  expect(bioExists).toBeNull();
});

it("Renders page", () => {
  const { asFragment } = render(<CV user={user} />);
  expect(asFragment()).toMatchSnapshot();
});
