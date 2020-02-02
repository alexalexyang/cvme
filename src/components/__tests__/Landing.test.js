import Landing from "../Landing";

afterEach(cleanup);

it("Renders page", () => {
  const { asFragment } = render(<Landing />);
  expect(asFragment()).toMatchSnapshot();
});
