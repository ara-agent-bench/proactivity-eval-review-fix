// Plans shown on pricing.html.
export function yearlyPriceCents(monthlyCents) {
  return monthlyCents * 10;
}

export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];
