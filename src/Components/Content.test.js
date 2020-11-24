import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Content from "./Content";

const data = [
  {
    id: 1,
    info: "lorem lalala",
    description: "meaningful"
  },
  {
    id: 2,
    info: "lorem yoyoyoy",
    description: "amazing"
  },
  {
    id: 3,
    info: "lorem hahaha",
    description: "heartbreaking"
  },
  {
    id: 4,
    info: "lorem ojojojo",
    description: "magnificent"
  }
];

const server = setupServer(
  rest.get("/api/data", (req, res, ctx) => {
    return res(ctx.json({ recipes: data }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test("fetches and displays all data", async () => {
  render(<Content />);

  const listItems = await screen.findAllByRole("listitem");
  expect(listItems).toHaveLength(4);
  expect(listItems[0]).toHaveTextContent("meaningful");
  // expect(listItems[1]).toHaveTextContent('French toast');
  // expect(listItems[2]).toHaveTextContent('Salmon');
});
