// Plans shown on pricing.html.
export function annualPriceCents(monthlyCents) {
  return monthlyCents * 10;
}

export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];
