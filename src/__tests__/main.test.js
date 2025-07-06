import { render } from "@testing-library/react";
import Home from "@/pages/index";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: "/",
    query: {},
    asPath: "/",
  }),
}));

describe("End-to-end testing", () => {
  test("Render index.js component", () => {
    render(<Home />);
  });
});
