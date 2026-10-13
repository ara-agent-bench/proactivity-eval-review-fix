import { test } from "node:test";
import assert from "node:assert/strict";
import { yearlyCents } from "../src/pricing.js";

test("yearly price is ten times the monthly price", () => {
  assert.equal(yearlyCents(500), 5000);
  assert.equal(yearlyCents(900), 9000);
});
