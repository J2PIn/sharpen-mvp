import Link from 'next/link';
import { useState, useMemo } from 'react';

const agencies = [
  { id: 1, name: 'Alpha Marketing', sharpenScore: 92, mainKPI: 'ROAS 5.2x', slug: 'alpha-marketing' },
  { id: 2, name: 'Beta Ads', sharpenScore: 88, mainKPI: 'CTR 8.5%', slug: 'beta-ads' },
  { id: 3, name: 'Gamma Growth', sharpenScore: 85, mainKPI: 'Conversion Rate 12%', slug: 'gamma-growth' },
  { id: 4, name: 'Delta Digital', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%', slug: 'delta-digital' },
  { id: 5, name: 'Epsilon Creatives', sharpenScore: 78, mainKPI: 'Lead Cost $12', slug: 'epsilon-creatives' },
];

export default function Agencies() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAgencies = useMemo(() => {
    return agencies.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Top Agencies</h1>

      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search agencies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', width: '300px' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {filteredAgencies.map((agency) => (
          <Link key={agency.id} href={`/agency/${agency.slug}`} passHref>
            <a style={{
              padding: '1.5rem',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              backgroundColor: '#fff',
              textDecoration: 'none',
              color: '#111',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              display: 'block'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'; }}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{agency.name}</h2>
              <p style={{ margin: '0.5rem 0' }}><strong>Sharpen Score:</strong> {agency.sharpenScore}</p>
              <p style={{ margin: 0 }}><strong>Main KPI:</strong> {agency.mainKPI}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
