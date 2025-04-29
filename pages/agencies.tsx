import Link from 'next/link';
import { useState } from 'react';

type Agency = {
  id: number;
  name: string;
  slug: string;
  sharpenScore: number;
  mainKPI: string;
  specialization: string;
  country: string;
};

const allAgencies: Agency[] = [
  { id: 1, name: 'Alpha Marketing', slug: 'alpha-marketing', sharpenScore: 92, mainKPI: 'ROAS 5.2x', specialization: 'E-commerce', country: 'Global' },
  { id: 2, name: 'Beta Ads', slug: 'beta-ads', sharpenScore: 88, mainKPI: 'CTR 8.5%', specialization: 'Paid Ads', country: 'Global' },
  { id: 3, name: 'Gamma Growth', slug: 'gamma-growth', sharpenScore: 85, mainKPI: 'Conversion Rate 12%', specialization: 'SaaS Growth', country: 'Global' },
  { id: 4, name: 'Delta Digital', slug: 'delta-digital', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%', specialization: 'Content Marketing', country: 'Global' },
  { id: 5, name: 'Epsilon Creatives', slug: 'epsilon-creatives', sharpenScore: 78, mainKPI: 'Lead Cost $12', specialization: 'CRO & Creatives', country: 'Global' },
  { id: 6, name: 'Nordic Boost', slug: 'nordic-boost', sharpenScore: 83, mainKPI: 'ROAS 4.8x', specialization: 'E-commerce', country: 'Finland' },
  { id: 7, name: 'Suomi Media', slug: 'suomi-media', sharpenScore: 80, mainKPI: 'CPL €9', specialization: 'Paid Ads', country: 'Finland' },
  { id: 8, name: 'Helsinki Digital', slug: 'helsinki-digital', sharpenScore: 77, mainKPI: 'CTR 7.2%', specialization: 'Content Marketing', country: 'Finland' },
  { id: 9, name: 'Arctic Growth', slug: 'arctic-growth', sharpenScore: 74, mainKPI: 'Conversion Rate 10%', specialization: 'SaaS Growth', country: 'Finland' },
  { id: 10, name: 'Lakeside Agency', slug: 'lakeside-agency', sharpenScore: 71, mainKPI: 'Lead Cost €11', specialization: 'CRO & Creatives', country: 'Finland' },
];

export default function AgencyIndex() {
  const [sort, setSort] = useState<'score' | 'name'>('score');
  const [search, setSearch] = useState('');

  const sortedAgencies = [...allAgencies]
    .filter((agency) => agency.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'score') return b.sharpenScore - a.sharpenScore;
      return a.name.localeCompare(b.name);
    });

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Agency Index</h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search agency..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value as 'score' | 'name')} style={{ padding: '0.5rem' }}>
          <option value="score">Sort by Sharpen Score</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sortedAgencies.map((agency) => (
          <li key={agency.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <Link href={`/agency/${agency.slug}`}>
              <a style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0070f3', textDecoration: 'none' }}>
                {agency.name}
              </a>
            </Link>
            <div style={{ marginTop: '0.25rem' }}>Sharpen Score: <strong>{agency.sharpenScore}</strong></div>
            <div>Main KPI: {agency.mainKPI}</div>
            <div>Specialization: {agency.specialization} · Country: {agency.country}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
