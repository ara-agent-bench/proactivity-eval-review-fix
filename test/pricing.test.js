import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, yearlyPriceCents } from "../src/pricing.js";

test("yearly price is ten times each plan's monthly price", () => {
  assert.deepEqual(
    PLANS.map(({ monthlyCents }) => yearlyPriceCents(monthlyCents)),
    [5000, 9000],
  );
});
