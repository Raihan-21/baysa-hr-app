import "@testing-library/jest-dom";
// import "@types/jest";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import Navbar from "@/components/molecules/Navbar";

describe("Overview", () => {
  it("renders a navbar", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navbar");
    expect(navbar).toBeInTheDocument();
  });
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByTestId("heading");
    const buttons = screen.getAllByRole("button");
    expect(heading).toBeInTheDocument();
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
  it("renders impressions section", () => {
    render(<Home />);
    const section = screen.getByTestId("section-impressions");
    expect(section).toBeInTheDocument();
  });
});
