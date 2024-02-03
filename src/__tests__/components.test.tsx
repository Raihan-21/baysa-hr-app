import Navbar from "@/components/molecules/Navbar";
import Searchbar from "@/components/organisms/Searchbar";
import "@testing-library/jest-dom";

import { render, screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("Searchbar", () => {
  it("renders", () => {
    const inputValue = "";
    const setInput = jest.fn();
    const locationValue = "";
    const setLocation = jest.fn();

    const onSearch = jest.fn();
    render(
      <Searchbar
        inputValue={inputValue}
        setParentInput={setInput}
        locationValue={locationValue}
        setParentLocation={setLocation}
        onSearch={onSearch}
      />
    );

    const input = screen.getByRole("input");
    const select = screen.getByRole("select");
    const button = screen.getByRole("button");
    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Call onChange on user input", async () => {
    const inputValue = "";
    const mockInputChange = jest.fn();
    const locationValue = "";
    const mockLocationChange = jest.fn();

    const onSearch = jest.fn();

    const user = userEvent.setup();
    render(
      <Searchbar
        inputValue={inputValue}
        setParentInput={mockInputChange}
        locationValue={locationValue}
        setParentLocation={mockLocationChange}
        onSearch={onSearch}
      />
    );

    const inputElement = screen.getByRole("input");
    const selectElement = screen.getByRole("select");

    await user.type(inputElement, "dev");
    await waitFor(() => expect(mockInputChange).toHaveBeenCalledTimes(3));
    await waitFor(() =>
      expect(mockInputChange).toHaveBeenNthCalledWith(1, "d")
    );
    await waitFor(() =>
      expect(mockInputChange).toHaveBeenNthCalledWith(2, "e")
    );
    await waitFor(() =>
      expect(mockInputChange).toHaveBeenNthCalledWith(3, "v")
    );

    await user.selectOptions(selectElement, "usa");
    await waitFor(() => expect(mockLocationChange).toHaveBeenCalled());
  });
});
