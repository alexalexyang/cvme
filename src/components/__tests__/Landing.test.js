import Landing from "../Landing";

describe("<Landing />", () => {
  it("Snapshot test for <Landing />", () => {
    const component = renderer.create(<Landing />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
