import React from "react";
import { render } from "@testing-library/react";
import Content from "./Content";

it("should render Content component", () => {
  const ContentComponent = render(<Content />);
  expect(ContentComponent).toBeTruthy();
});

it("Total length of Content should be 4", () => {
  const { getByTestId } = render(<Content />);
  const listUl = getByTestId("list-item");
  expect(listUl.children.length).toBe(4);
});
