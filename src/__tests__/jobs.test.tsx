import Navbar from "@/components/molecules/Navbar";
import Jobs from "@/pages/jobs";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

describe("Jobs", () => {
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
    render(<Jobs />);
    const heading = screen.getByTestId("heading");
    const title = screen.getByTestId("heading-title");
    const desc = screen.getByTestId("heading-desc");

    expect(heading).toBeInTheDocument();
    expect(title.innerHTML).toBe("Let's find you a new job");
    expect(desc.innerHTML).toBe("It is enough to enter keywords or companies");
  });

  it("renders a searchbar", () => {
    render(<Jobs />);

    const input = screen.getByRole("input");
    const select = screen.getByRole("select");

    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });
  it("renders filter component", () => {
    render(<Jobs />);

    const filterComponent = screen.getByTestId("filter-container");
    expect(filterComponent).toBeInTheDocument();
  });
});
