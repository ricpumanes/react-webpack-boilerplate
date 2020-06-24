import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Home from "../src/views/Home";

test("should display and increment count", () => {
  render(<Home />);

  expect(screen.getByTestId("count-display").textContent).toBe("0");

  fireEvent.click(screen.getByTestId("button-increment"));

  expect(screen.getByTestId("count-display").textContent).toBe("1");
});
