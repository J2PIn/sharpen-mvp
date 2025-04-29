import { useState } from 'react';
import Link from 'next/link';

const allAgencies = [
  { id: 1, name: 'Alpha Marketing', sharpenScore: 92, mainKPI: 'ROAS 5.2x' },
  { id: 2, name: 'Beta Ads', sharpenScore: 88, mainKPI: 'CTR 8.5%' },
  { id: 3, name: 'Gamma Growth', sharpenScore: 85, mainKPI: 'Conversion Rate 12%' },
  { id: 4, name: 'Delta Digital', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%' },
  { id: 5, name: 'Epsilon Creatives', sharpenScore: 78, mainKPI: 'Lead Cost $12' },
  // Finnish agencies
  { id: 6, name: 'Nordic Boost', sharpenScore: 83, mainKPI: 'ROAS 4.8x' },
  { id: 7, name: 'Suomi Media', sharpenScore: 80, mainKPI: 'CPL €9' },
  { id: 8, name: 'Helsinki Digital', sharpenScore: 77, mainKPI: 'CTR 7.2%' },
  { id: 9, name: 'Arctic Growth', sharpenScore: 74, mainKPI: 'Conversion Rate 10%' },
  { id: 10, name: 'Lakeside Agency', sharpenScore: 71, mainKPI: 'Lead Cost €11' },
];

export default function AgencyIndex() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAgencies = allAgencies.filter((agency) =>
    agency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Agency Index</h1>

      <input
        type="text"
        placeholder="Search agencies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '0.75rem',
          marginBottom: '2rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredAgencies.map((agency) => (
          <li
            key={agency.id}
            style={{
              marginBottom: '1rem',
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
          >
            <Link href={`/agency/${agency.id}`}>
              <a style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0070f3', textDecoration: 'none' }}>
                {agency.name}
              </a>
            </Link>
            <div style={{ marginTop: '0.25rem' }}>
              Sharpen Score: <strong>{agency.sharpenScore}</strong>
            </div>
            <div>Main KPI: {agency.mainKPI}</div>
          </li>
        ))}
      </ul>

      {filteredAgencies.length === 0 && (
        <p style={{ marginTop: '2rem', color: '#999' }}>No agencies found.</p>
      )}
    </div>
  );
}
