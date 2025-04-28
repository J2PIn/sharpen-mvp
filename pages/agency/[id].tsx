import { useRouter } from 'next/router';

const dummyAgencies = {
  1: { name: 'Alpha Marketing', sharpenScore: 92, mainKPI: 'ROAS 5.2x', description: 'Specialists in e-commerce scaling and paid social ads.' },
  2: { name: 'Beta Ads', sharpenScore: 88, mainKPI: 'CTR 8.5%', description: 'Experts in paid search campaigns and YouTube ads.' },
  3: { name: 'Gamma Growth', sharpenScore: 85, mainKPI: 'Conversion Rate 12%', description: 'Full-funnel growth strategists for SaaS businesses.' },
  4: { name: 'Delta Digital', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%', description: 'Content-driven digital marketing and community building.' },
  5: { name: 'Epsilon Creatives', sharpenScore: 78, mainKPI: 'Lead Cost $12', description: 'Performance creative and CRO experts for direct-to-consumer brands.' },
};

export default function AgencyProfile() {
  const router = useRouter();
  const { id } = router.query;

  const agency = dummyAgencies[Number(id)];

  if (!agency) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1>Agency not found</h1>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{agency.name}</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sharpen Score: <strong>{agency.sharpenScore}</strong></p>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Main KPI: {agency.mainKPI}</p>
      <p style={{ maxWidth: '600px', fontSize: '1rem', color: '#555' }}>{agency.description}</p>
    </div>
  );
}
