// Define types for clarity
type KPIType = 'ROAS' | 'CTR' | 'CPA' | 'Conversion Rate' | 'Lead Cost';
type ClientSize = 'enterprise' | 'mid' | 'smb';

// Normalize KPI to a score out of 100
function normalizeKPI(kpiType: KPIType, value: number): number {
  switch (kpiType) {
    case 'ROAS':
      return Math.min(100, value * 20); // e.g., 5.2x → 104 → capped at 100
    case 'CTR':
      return Math.min(100, value * 10); // e.g., 8.5% → 85
    case 'CPA':
      return Math.max(0, 100 - value);  // lower CPA is better
    case 'Conversion Rate':
      return Math.min(100, value * 5);  // e.g., 12% → 60
    case 'Lead Cost':
      return Math.max(0, 100 - value);  // lower is better
    default:
      return 50;
  }
}

// Bonus for recency of update
function updateBonus(lastUpdated: string): number {
  const days = (Date.now() - new Date(lastUpdated).getTime()) / (1000 * 60 * 60 * 24);
  if (days <= 1) return 5;
  if (days <= 7) return 3;
  if (days <= 30) return 1;
  return 0;
}

// Bonus for client size
function clientSizeBonus(size: ClientSize): number {
  switch (size) {
    case 'enterprise':
      return 5;
    case 'mid':
      return 3;
    case 'smb':
      return 1;
    default:
      return 0;
  }
}

// Final Sharpen Score calculation
export function calculateSharpenScore(params: {
  kpiType: KPIType;
  kpiValue: number;
  lastUpdated: string; // ISO string
  clientSize: ClientSize;
}): number {
  const base = normalizeKPI(params.kpiType, params.kpiValue);
  const recency = updateBonus(params.lastUpdated);
  const client = clientSizeBonus(params.clientSize);
  return Math.round(base + recency + client);
}


