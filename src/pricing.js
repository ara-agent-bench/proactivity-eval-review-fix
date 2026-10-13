// Prices are expressed in cents.
export const yearlyPriceCents = monthlyCents => monthlyCents * 10;

// Plans shown on pricing.html.
export const PLANS = [
  { name: "Starter", monthlyCents: 500 },
  { name: "Pro", monthlyCents: 900 },
];
