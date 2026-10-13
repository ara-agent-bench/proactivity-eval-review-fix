import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, yearlyPriceCents } from "../src/pricing.js";

test("yearly prices are ten times monthly prices", () => {
  assert.deepEqual(
    PLANS.map(plan => yearlyPriceCents(plan.monthlyCents)),
    [5000, 9000],
  );
});
