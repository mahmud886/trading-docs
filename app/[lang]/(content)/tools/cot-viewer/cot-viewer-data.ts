// Simulated COT data (in production, fetch from CFTC API/proxy)
export const cotData = {
  "EUR/USD": {
    assetManagers: { long: 180000, short: 95000 },
    leveragedFunds: { long: 120000, short: 145000 },
    dealers: { long: 85000, short: 130000 },
    change: { am: 12000, lf: -8000, d: -5000 },
  },
  "GBP/USD": {
    assetManagers: { long: 65000, short: 40000 },
    leveragedFunds: { long: 45000, short: 60000 },
    dealers: { long: 30000, short: 55000 },
    change: { am: 5000, lf: -3000, d: -2000 },
  },
  "USD/JPY": {
    assetManagers: { long: 95000, short: 45000 },
    leveragedFunds: { long: 80000, short: 55000 },
    dealers: { long: 50000, short: 75000 },
    change: { am: -8000, lf: 10000, d: 3000 },
  },
  "AUD/USD": {
    assetManagers: { long: 55000, short: 70000 },
    leveragedFunds: { long: 40000, short: 50000 },
    dealers: { long: 35000, short: 25000 },
    change: { am: -3000, lf: -2000, d: 5000 },
  },
  GOLD: {
    assetManagers: { long: 280000, short: 35000 },
    leveragedFunds: { long: 195000, short: 85000 },
    dealers: { long: 40000, short: 250000 },
    change: { am: 25000, lf: 15000, d: -30000 },
  },
};

export type CotPair = keyof typeof cotData;
