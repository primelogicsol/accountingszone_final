import { TaxScenario } from '@/types';

export async function getTaxScenarios(): Promise<TaxScenario[]> {
  const res = await fetch('/api/scenarios');
  if (!res.ok) {
    throw new Error('Failed to fetch tax scenarios');
  }
  return res.json();
}