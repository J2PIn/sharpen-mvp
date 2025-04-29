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
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Agency Index</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {realAgencies.concat(finnishAgencies).map((agency) => (
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

