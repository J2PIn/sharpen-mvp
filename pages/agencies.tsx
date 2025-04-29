import { useState } from 'react';
import Link from 'next/link';

// --- International agencies ---
const realAgencies = [
  { id: 1, name: "WebFX", sharpenScore: 98, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/webfx" },
  { id: 2, name: "Disruptive Advertising", sharpenScore: 96, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/disruptive-advertising" },
  { id: 3, name: "Ignite Visibility", sharpenScore: 96, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/ignite-visibility" },
  { id: 4, name: "Ruckus", sharpenScore: 100, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/ruckus" },
  { id: 5, name: "Power Digital", sharpenScore: 96, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/power-digital" },
  { id: 6, name: "Accelerated Digital Media", sharpenScore: 94, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/accelerated-digital-media" },
  { id: 7, name: "SmartSites", sharpenScore: 98, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/smartsites" },
  { id: 8, name: "Funnel Boost Media", sharpenScore: 98, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/funnel-boost-media" },
  { id: 9, name: "SeedX Inc.", sharpenScore: 100, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/seedx" },
  { id: 10, name: "Socium Media", sharpenScore: 98, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/socium-media" },
  { id: 11, name: "JOS", sharpenScore: 98, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/jos" },
  { id: 12, name: "Search Berg", sharpenScore: 92, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/search-berg" },
  { id: 13, name: "HawkSEM", sharpenScore: 98, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/hawksem" },
  { id: 14, name: "Big Red Jelly", sharpenScore: 96, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/big-red-jelly" },
  { id: 15, name: "Promodo", sharpenScore: 96, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/promodo" },
  { id: 16, name: "Thrive Internet Marketing Agency", sharpenScore: 92, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/thrive-internet-marketing-agency" },
  { id: 17, name: "Harvest Growth", sharpenScore: 100, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/harvest-growth" },
  { id: 18, name: "Desun Technology Pvt Ltd", sharpenScore: 100, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/desun-technology" },
  { id: 19, name: "EvenDigit", sharpenScore: 98, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/evendigit" },
  { id: 20, name: "Elit-Web", sharpenScore: 100, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/elit-web" },
];

// --- Finnish agencies ---
const finnishAgencies = [
  { id: 21, name: "Hasan & Partners", sharpenScore: 90, mainKPI: "ROAS 4.5x", website: "https://hasanpartners.fi" },
  { id: 22, name: "TBWA\\Helsinki", sharpenScore: 92, mainKPI: "CTR 8.2%", website: "https://tbwa.fi" },
  { id: 23, name: "Bob the Robot", sharpenScore: 89, mainKPI: "Lead Cost €15", website: "https://bobtherobot.fi" },
  { id: 24, name: "Dagmar", sharpenScore: 91, mainKPI: "ROAS 5.0x", website: "https://dagmar.fi" },
  { id: 25, name: "SEK", sharpenScore: 87, mainKPI: "Conversion Rate 11%", website: "https://sek.fi" },
  { id: 26, name: "Nitro", sharpenScore: 85, mainKPI: "CTR 7.8%", website: "https://nitro.fi" },
  { id: 27, name: "Meltwater Finland", sharpenScore: 90, mainKPI: "Engagement Rate 6.5%", website: "https://www.meltwater.com/fi" },
  { id: 28, name: "Kurio", sharpenScore: 88, mainKPI: "Social Reach 500k", website: "https://kurio.fi" },
  { id: 29, name: "Tulos Helsinki", sharpenScore: 93, mainKPI: "ROAS 6.0x", website: "https://tulos.fi" },
  { id: 30, name: "Evermade", sharpenScore: 89, mainKPI: "Conversion Rate 12%", website: "https://evermade.fi" },
];

export default function AgencyIndex() {
  const [sortOption, setSortOption] = useState('score-desc');

  const combinedAgencies = realAgencies.concat(finnishAgencies);

  const sortedAgencies = [...combinedAgencies].sort((a, b) => {
    if (sortOption === 'score-desc') {
      return b.sharpenScore - a.sharpenScore;
    } else if (sortOption === 'score-asc') {
      return a.sharpenScore - b.sharpenScore;
    } else if (sortOption === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>Sharpen Agency Index</h1>

      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <label htmlFor="sort" style={{ fontSize: '1.1rem', marginRight: '1rem' }}>Sort by:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        >
          <option value="score-desc">Sharpen Score (Highest first)</option>
          <option value="score-asc">Sharpen Score (Lowest first)</option>
          <option value="name-asc">Alphabetical (A–Z)</option>
          <option value="name-desc">Alphabetical (Z–A)</option>
        </select>
      </div>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {sortedAgencies.map((agency) => (
          <li key={agency.id} style={{
            padding: '1.5rem',
            border: '1px solid #eee',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
            transition: 'all 0.2s ease-in-out'
          }}>
            <Link href={`/agency/${agency.id}`}>
              <a style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#0070f3',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                {agency.name}
              </a>
            </Link>
            <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
              Sharpen Score: <strong>{agency.sharpenScore}</strong>
            </div>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              Main KPI: {agency.mainKPI}
            </div>
            <a href={agency.website} target="_blank" rel="noopener noreferrer" style={{
              fontSize: '0.9rem',
              color: '#555',
              textDecoration: 'underline'
            }}>
              Visit Website
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

