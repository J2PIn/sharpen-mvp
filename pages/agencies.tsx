import Link from 'next/link';

const dummyAgencies = [
  { id: 1, name: 'Alpha Marketing', sharpenScore: 92, mainKPI: 'ROAS 5.2x' },
  { id: 2, name: 'Beta Ads', sharpenScore: 88, mainKPI: 'CTR 8.5%' },
  { id: 3, name: 'Gamma Growth', sharpenScore: 85, mainKPI: 'Conversion Rate 12%' },
  { id: 4, name: 'Delta Digital', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%' },
  { id: 5, name: 'Epsilon Creatives', sharpenScore: 78, mainKPI: 'Lead Cost $12' },
];

export default function AgencyIndex() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Agency Index</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dummyAgencies.map((agency) => (
          <li key={agency.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <Link href={`/agency/${agency.id}`}>
              <a style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0070f3', textDecoration: 'none' }}>
                {agency.name}
              </a>
            </Link>
            <div style={{ marginTop: '0.25rem' }}>Sharpen Score: <strong>{agency.sharpenScore}</strong></div>
            <div>Main KPI: {agency.mainKPI}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
