import { useState } from 'react';
import Link from 'next/link';

const allAgencies = [
  { id: 1, name: 'Alpha Marketing', sharpenScore: 92, mainKPI: 'ROAS 5.2x', specialization: 'E-commerce', country: 'Global' },
  { id: 2, name: 'Beta Ads', sharpenScore: 88, mainKPI: 'CTR 8.5%', specialization: 'Paid Ads', country: 'Global' },
  { id: 3, name: 'Gamma Growth', sharpenScore: 85, mainKPI: 'Conversion Rate 12%', specialization: 'SaaS Growth', country: 'Global' },
  { id: 4, name: 'Delta Digital', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%', specialization: 'Content Marketing', country: 'Global' },
  { id: 5, name: 'Epsilon Creatives', sharpenScore: 78, mainKPI: 'Lead Cost $12', specialization: 'CRO & Creatives', country: 'Global' },
  // Finnish agencies
  { id: 6, name: 'Nordic Boost', sharpenScore: 83, mainKPI: 'ROAS 4.8x', specialization: 'E-commerce', country: 'Finland' },
  { id: 7, name: 'Suomi Media', sharpenScore: 80, mainKPI: 'CPL €9', specialization: 'Paid Ads', country: 'Finland' },
  { id: 8, name: 'Helsinki Digital', sharpenScore: 77, mainKPI: 'CTR 7.2%', specialization: 'Content Marketing', country: 'Finland' },
  { id: 9, name: 'Arctic Growth', sharpenScore: 74, mainKPI: 'Conversion Rate 10%', specialization: 'SaaS Growth', country: 'Finland' },
  { id: 10, name: 'Lakeside Agency', sharpenScore: 71, mainKPI: 'Lead Cost €11', specialization: 'CRO & Creatives', country: 'Finland' },
];

export default function AgencyIndex() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const specializations = ['All', 'E-commerce', 'Paid Ads', 'SaaS Growth', 'Content Marketing', 'CRO & Creatives'];
  const countries = ['All', 'Global', 'Finland'];

  const filteredAgencies = allAgencies
    .filter((agency) =>
      agency.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((agency) =>
      selectedSpecialization === 'All' || agency.specialization === selectedSpecialization
    )
    .filter((agency) =>
      selectedCountry === 'All' || agency.country === selectedCountry
    )
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.sharpenScore - b.sharpenScore
        : b.sharpenScore - a.sharpenScore
    );

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Agency Index</h1>

      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Search agencies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        >
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        >
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button
            onClick={() => setSortOrder('desc')}
            style={{
              flex: 1,
              padding: '0.75rem',
              backgroundColor: sortOrder === 'desc' ? '#0070f3' : '#f0f0f0',
              color: sortOrder === 'desc' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Highest Score
          </button>

          <button
            onClick={() => setSortOrder('asc')}
            style={{
              flex: 1,
              padding: '0.75rem',
              backgroundColor: sortOrder === 'asc' ? '#0070f3' : '#f0f0f0',
              color: sortOrder === 'asc' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Lowest Score
          </button>
        </div>
      </div>

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
            <div style={{ fontSize: '0.9rem', color: '#555' }}>
              {agency.specialization} · {agency.country}
            </div>
          </li>
        ))}
      </ul>

      {filteredAgencies.length === 0 && (
        <p style={{ marginTop: '2rem', color: '#999' }}>No agencies found.</p>
      )}
    </div>
  );
}
