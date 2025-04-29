import { useRouter } from 'next/router';

const dummyAgencies = {
  'alpha-marketing': { name: 'Alpha Marketing', sharpenScore: 92, mainKPI: 'ROAS 5.2x', description: 'Specialists in e-commerce scaling and paid social ads.' },
  'beta-ads': { name: 'Beta Ads', sharpenScore: 88, mainKPI: 'CTR 8.5%', description: 'Experts in paid search campaigns and YouTube ads.' },
  'gamma-growth': { name: 'Gamma Growth', sharpenScore: 85, mainKPI: 'Conversion Rate 12%', description: 'Full-funnel growth strategists for SaaS businesses.' },
  'delta-digital': { name: 'Delta Digital', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%', description: 'Content-driven digital marketing and community building.' },
  'epsilon-creatives': { name: 'Epsilon Creatives', sharpenScore: 78, mainKPI: 'Lead Cost $12', description: 'Performance creative and CRO experts for DTC brands.' },
};

export default function AgencyProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const agency = dummyAgencies[slug as keyof typeof dummyAgencies];

  if (!agency) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem' }}>Agency Not Found</h1>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111' }}>{agency.name}</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Sharpen Score: <strong>{agency.sharpenScore}</strong></p>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Main KPI: <strong>{agency.mainKPI}</strong></p>
      <p style={{ fontSize: '1rem', color: '#555', textAlign: 'center', lineHeight: '1.6' }}>{agency.description}</p>
    </div>
  );
}
