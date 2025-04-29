import Link from 'next/link';
import { useState, useMemo } from 'react';
import { agencies } from '../data/agencies';

export default function Agencies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('sharpen-desc');

  const sortedAgencies = useMemo(() => {
    let sorted = [...agencies];
    if (sortBy === 'sharpen-desc') {
      sorted.sort((a, b) => b.sharpenScore - a.sharpenScore);
    } else if (sortBy === 'sharpen-asc') {
      sorted.sort((a, b) => a.sharpenScore - b.sharpenScore);
    } else if (sortBy === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sorted;
  }, [sortBy]);

  const filteredAgencies = useMemo(() => {
    return sortedAgencies.filter(agency =>
      agency.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, sortedAgencies]);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Agency Leaderboard</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search agencies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', minWidth: '250px' }}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', minWidth: '200px' }}
        >
          <option value="sharpen-desc">Sharpen Score: High → Low</option>
          <option value="sharpen-asc">Sharpen Score: Low → High</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {filteredAgencies.map((agency, index) => (
          <Link key={agency.id} href={`/agency/${agency.slug}`} passHref>
            <a style={{
              padding: '1.5rem',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              backgroundColor: '#fff',
              textDecoration: 'none',
              color: '#111',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'block'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'; }}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                #{index + 1} {agency.name}
              </h2>
              <p style={{ margin: '0.5rem 0' }}><strong>Sharpen Score:</strong> {agency.sharpenScore}</p>
              <p style={{ margin: 0 }}><strong>Main KPI:</strong> {agency.mainKPI}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
