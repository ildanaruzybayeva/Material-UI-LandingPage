import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders the heading text", () => {
  const { getByText } = render(<Header />);
  getByText("This is de header");

  expect(screen.getByText("This is de header")).toBeInTheDocument();
});
