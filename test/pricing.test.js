import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, yearlyPriceCents } from "../src/pricing.js";

test("yearly price is ten times the monthly price", () => {
  assert.equal(yearlyPriceCents(PLANS[0].monthlyCents), 5000);
  assert.equal(yearlyPriceCents(PLANS[1].monthlyCents), 9000);
});
