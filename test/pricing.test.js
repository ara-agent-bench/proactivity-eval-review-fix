import { test } from "node:test";
import assert from "node:assert/strict";
import { annualPriceCents, PLANS } from "../src/pricing.js";

test("yearly price is ten times the monthly plan price", () => {
  assert.deepEqual(
    PLANS.map(plan => annualPriceCents(plan.monthlyCents)),
    [5000, 9000],
  );
});
