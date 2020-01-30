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

describe("<CV />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CV user={user} />);
  });

  afterEach(() => wrapper.unmount());

  it("Successfully passes user data as props to <CV />", () => {
    expect(wrapper.props().user).toEqual(user);
  });

  it("Successfully renders user data", () => {
    const value = wrapper.find("h2").text();
    expect(value).toEqual("A wonderful programmer who loves swimming.");
  });

  it("Renders empty string where user properties are missing", () => {
    const wrapper = mount(<CV user={userMissingData} />);
    const value = wrapper.find("h2").text();
    expect(value).toEqual("");
    wrapper.unmount();
  });

  it("Checks that bio exists and GitHub login does not", () => {
    expect(wrapper.exists(".github-link")).toEqual(false);
    expect(wrapper.exists(".display-github-login")).toEqual(true);
  });

  it("TChecks that bio has gone and GitHub login has taken its place", () => {
    wrapper.find("h2").simulate("click");
    expect(wrapper.exists(".github-link")).toEqual(true);
    expect(wrapper.exists(".display-github-login")).toEqual(false);
  });
});
