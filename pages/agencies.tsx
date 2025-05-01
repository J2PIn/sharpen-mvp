import { useState, useMemo } from 'react';
import Link from 'next/link';
import { agencies as realAgencies } from '../data/agencies';

type KPIType = 'ROAS' | 'CPA' | 'CTR' | 'Conversion Rate' | 'Lead Cost';
type ClientSize = 'smb' | 'mid' | 'enterprise';

interface Agency {
  id: number;
  name: string;
  slug: string;
  kpiType: KPIType;
  kpiValue: number;
  lastUpdated: string;
  clientSize: ClientSize;
  sharpenScore?: number;
}

function calculateSharpenScore({
  kpiType,
  kpiValue,
  lastUpdated,
  clientSize
}: {
  kpiType: KPIType;
  kpiValue: number;
  lastUpdated: string;
  clientSize: ClientSize;
}): number {
  let score = 0;

  const today = new Date();
  const last = new Date(lastUpdated);
  const diffDays = Math.max(1, Math.floor((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)));

  const recencyWeight = 100 / diffDays;

  switch (kpiType) {
    case 'ROAS':
    case 'Conversion Rate':
    case 'CTR':
      score += kpiValue * 10;
      break;
    case 'CPA':
    case 'Lead Cost':
      score += 100 - kpiValue;
      break;
  }

  score += recencyWeight;

  switch (clientSize) {
    case 'enterprise':
      score += 20;
      break;
    case 'mid':
      score += 10;
      break;
  }

  return Math.max(0, Math.min(100, Math.round(score)));
}

export default function AgencyIndex() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'score' | 'name'>('score');

  const rankedAgencies = useMemo(() => {
    return realAgencies
      .map(agency => ({
        ...agency,
        sharpenScore: calculateSharpenScore({
          kpiType: agency.kpiType as KPIType,
          kpiValue: agency.kpiValue,
          lastUpdated: agency.lastUpdated,
          clientSize: agency.clientSize as ClientSize
        })
      }))
      .filter(agency =>
        agency.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'score') {
          return b.sharpenScore! - a.sharpenScore!;
        } else {
          return a.name.localeCompare(b.name);
        }
      });
  }, [search, sortBy]);

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">Agency Index</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search agencies..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
        />
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as 'score' | 'name')}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="score">Sort by Score</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <ul className="space-y-4">
        {rankedAgencies.map((agency, index) => (
          <li
            key={agency.slug}
            className="p-4 border rounded-lg hover:shadow transition"
          >
            <Link href={`/agency/${agency.slug}`}>
              <div className="cursor-pointer">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    {index + 1}. {agency.name}
                  </h2>
                  <span className="text-sm text-gray-500">
                    Score: <strong>{agency.sharpenScore}</strong>
                  </span>
                </div>
                <div className="text-sm mt-1 text-gray-600">
                  KPI: {agency.kpiType} — {agency.kpiValue}
                </div>
                <div className="text-xs text-gray-500">
                  Last updated: {agency.lastUpdated} — Client size: {agency.clientSize}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
