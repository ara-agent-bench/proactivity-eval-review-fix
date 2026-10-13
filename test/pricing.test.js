import { test } from "node:test";
import assert from "node:assert/strict";
import { PLANS, yearlyCents } from "../src/pricing.js";

test("yearly price is ten times the monthly price", () => {
  assert.equal(yearlyCents(500), 5000);
  assert.equal(yearlyCents(900), 9000);
});

test("each plan's yearly price is ten times its monthly price", () => {
  for (const plan of PLANS) {
    assert.equal(yearlyCents(plan.monthlyCents), plan.monthlyCents * 10);
  }
});
