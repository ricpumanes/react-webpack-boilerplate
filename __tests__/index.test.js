import React from "react";
import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../src/App";

import { init, client } from "../src/feathersClient";

beforeAll(() => init());
afterAll(() => cleanup());

test("should connect to the service", async () => {
  await act(async () => {
    render(<App />);
    // just to test the connection
    await client.service("projects").find({});
    expect(client.io.connected).toBe(true);
  });
});
