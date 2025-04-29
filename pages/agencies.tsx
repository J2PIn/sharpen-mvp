import Link from 'next/link';

// 👇 Real Agencies data here
const realAgencies = [
  { id: 1, name: "WebFX", sharpenScore: 98, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/webfx" },
  { id: 2, name: "Disruptive Advertising", sharpenScore: 96, mainKPI: "ROAS 5.0x", website: "https://clutch.co/profile/disruptive-advertising" },
  // etc. all 20 agencies
];

export default function AgencyIndex() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Agency Index</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {realAgencies.map((agency) => (
          <li key={agency.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <Link href={`/agency/${agency.id}`}>
              <a style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0070f3', textDecoration: 'none' }}>
                {agency.name}
              </a>
            </Link>
            <div>Sharpen Score: {agency.sharpenScore}</div>
            <div>Main KPI: {agency.mainKPI}</div>
            <div><a href={agency.website} target="_blank" rel="noopener noreferrer">Visit Website</a></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
