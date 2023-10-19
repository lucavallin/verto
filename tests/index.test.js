// index.test.js

import { render, screen } from "@testing-library/react";
import Index from "../data"; // Import the component you want to test

describe("index", () => {
  it("renders the component", () => {
    render(<Index />);
    const component = screen.getByTestId("my-component"); // Use a test ID to select the component

    expect(component).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    render(<Index />);
    const textElement = screen.getByText("Hello, World!");

    expect(textElement).toBeInTheDocument();
  });
});
