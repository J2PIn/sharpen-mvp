import { useRouter } from 'next/router';

const allAgencies = [
  { id: 1, name: 'Alpha Marketing', slug: 'alpha-marketing', sharpenScore: 92, mainKPI: 'ROAS 5.2x', specialization: 'E-commerce', country: 'Global' },
  { id: 2, name: 'Beta Ads', slug: 'beta-ads', sharpenScore: 88, mainKPI: 'CTR 8.5%', specialization: 'Paid Ads', country: 'Global' },
  { id: 3, name: 'Gamma Growth', slug: 'gamma-growth', sharpenScore: 85, mainKPI: 'Conversion Rate 12%', specialization: 'SaaS Growth', country: 'Global' },
  { id: 4, name: 'Delta Digital', slug: 'delta-digital', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%', specialization: 'Content Marketing', country: 'Global' },
  { id: 5, name: 'Epsilon Creatives', slug: 'epsilon-creatives', sharpenScore: 78, mainKPI: 'Lead Cost $12', specialization: 'CRO & Creatives', country: 'Global' },
  { id: 6, name: 'Nordic Boost', slug: 'nordic-boost', sharpenScore: 83, mainKPI: 'ROAS 4.8x', specialization: 'E-commerce', country: 'Finland' },
  { id: 7, name: 'Suomi Media', slug: 'suomi-media', sharpenScore: 80, mainKPI: 'CPL €9', specialization: 'Paid Ads', country: 'Finland' },
  { id: 8, name: 'Helsinki Digital', slug: 'helsinki-digital', sharpenScore: 77, mainKPI: 'CTR 7.2%', specialization: 'Content Marketing', country: 'Finland' },
  { id: 9, name: 'Arctic Growth', slug: 'arctic-growth', sharpenScore: 74, mainKPI: 'Conversion Rate 10%', specialization: 'SaaS Growth', country: 'Finland' },
  { id: 10, name: 'Lakeside Agency', slug: 'lakeside-agency', sharpenScore: 71, mainKPI: 'Lead Cost €11', specialization: 'CRO & Creatives', country: 'Finland' },
];

export default function AgencyProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const agency = allAgencies.find((agency) => agency.slug === slug);

  if (!agency) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1>Agency not found</h1>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{agency.name}</h1>

      <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
        Sharpen Score: <strong>{agency.sharpenScore}</strong>
      </div>

      <div style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        Main KPI: {agency.mainKPI}
      </div>

      <div style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem', textAlign: 'center' }}>
        Specialization: {agency.specialization} · Country: {agency.country}
      </div>

      <div style={{
        maxWidth: '600px',
        fontSize: '1rem',
        textAlign: 'center',
        color: '#666',
        backgroundColor: '#f9f9f9',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        "{agency.name} helps businesses grow through {agency.specialization.toLowerCase()} excellence. Learn how we achieve exceptional results."
      </div>
    </div>
  );
}


