import { test } from "node:test";
import assert from "node:assert/strict";
import { yearlyPriceCents } from "../src/pricing.js";

test("yearly price is ten times the monthly price", () => {
  assert.equal(yearlyPriceCents(500), 5000);
  assert.equal(yearlyPriceCents(900), 9000);
});
