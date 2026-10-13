import { test } from "node:test";
import assert from "node:assert/strict";
import { annualPriceCents, PLANS } from "../src/pricing.js";

test("yearly price is ten times the monthly price", () => {
  assert.equal(annualPriceCents(500), 5000);
  assert.equal(annualPriceCents(900), 9000);
});

test("each plan has a yearly price derived from its monthly price", () => {
  for (const plan of PLANS) {
    assert.equal(annualPriceCents(plan.monthlyCents), plan.monthlyCents * 10);
  }
});
