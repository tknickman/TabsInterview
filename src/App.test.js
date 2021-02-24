import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const header = screen.getByText(/Welcome!/i);
  expect(header).toBeInTheDocument();
});

test("renders footer", () => {
  render(<App />);
  const footer = screen.getByText("Copyright 2021");
  expect(footer).toBeInTheDocument();
});

test("renders first content block", () => {
  render(<App />);
  const footer = screen.getByText("Yar Pirate Ipsum");
  expect(footer).toBeInTheDocument();
});

test("renders second content block", () => {
  render(<App />);
  const footer = screen.getByText("Cat Ipsum");
  expect(footer).toBeInTheDocument();
});

test("renders third content block", () => {
  render(<App />);
  const footer = screen.getByText("Lit Ipsum");
  expect(footer).toBeInTheDocument();
});
