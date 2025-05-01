import Link from 'next/link';
import { agencies } from '../data/agencies';
import { calculateSharpenScore } from '../utils/sharpenScore';
import { useState } from 'react';

export default function AgencyIndex() {
  const [search, setSearch] = useState('');

  const filteredAgencies = agencies
    .map(agency => ({
      ...agency,
      sharpenScore: calculateSharpenScore(agency)
    }))
    .filter(agency =>
      agency.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.sharpenScore - a.sharpenScore);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Agency Index</h1>
      <input
        type="text"
        placeholder="Search agencies..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          width: '100%',
          marginBottom: '2rem',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredAgencies.map(agency => (
          <li
            key={agency.id}
            style={{
              marginBottom: '1.5rem',
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}
          >
            <Link href={`/agency/${agency.slug}`}>
              <a style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0070f3', textDecoration: 'none' }}>
                {agency.name}
              </a>
            </Link>
            <div>Sharpen Score: <strong>{agency.sharpenScore}</strong></div>
            <div>Main KPI: {agency.kpiType} = {agency.kpiValue}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
