import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import Navbar from "@/components/molecules/Navbar";

describe("Overview", () => {
  it("renders a navbar", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navbar");
    const menuItems = screen.getAllByTestId("menu-item");
    const imgProfile = screen.getByTestId("profile-img");

    expect(navbar).toBeInTheDocument();
    expect(imgProfile).toBeInTheDocument();
    expect(menuItems.length).toBe(5);
    menuItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
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

  it("renders sections", () => {
    render(<Home />);
    const sections = screen.getAllByTestId("section");
    expect(sections.length).toBe(7);
    sections.forEach((section) => {
      expect(section).toBeInTheDocument();
    });
  });

  it("renders components", () => {
    render(<Home />);
    const pills = screen.getAllByTestId("pills");

    pills.forEach((pill) => {
      expect(pill).toBeInTheDocument();
    });
  });
});
