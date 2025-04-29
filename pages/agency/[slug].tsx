import { useRouter } from 'next/router';

const allAgencies = [
  { id: 1, name: 'Alpha Marketing', slug: 'alpha-marketing', logo: 'https://logo.clearbit.com/alphamarketing.com', sharpenScore: 92, mainKPI: 'ROAS 5.2x', specialization: 'E-commerce', country: 'Global' },
  { id: 2, name: 'Beta Ads', slug: 'beta-ads', logo: 'https://logo.clearbit.com/betaads.com', sharpenScore: 88, mainKPI: 'CTR 8.5%', specialization: 'Paid Ads', country: 'Global' },
  { id: 3, name: 'Gamma Growth', slug: 'gamma-growth', logo: 'https://logo.clearbit.com/gammagrowth.com', sharpenScore: 85, mainKPI: 'Conversion Rate 12%', specialization: 'SaaS Growth', country: 'Global' },
  { id: 4, name: 'Delta Digital', slug: 'delta-digital', logo: 'https://logo.clearbit.com/deltadigital.com', sharpenScore: 81, mainKPI: 'Engagement Rate 7.1%', specialization: 'Content Marketing', country: 'Global' },
  { id: 5, name: 'Epsilon Creatives', slug: 'epsilon-creatives', logo: 'https://logo.clearbit.com/epsiloncreatives.com', sharpenScore: 78, mainKPI: 'Lead Cost $12', specialization: 'CRO & Creatives', country: 'Global' },
  { id: 6, name: 'Nordic Boost', slug: 'nordic-boost', logo: 'https://logo.clearbit.com/nordicboost.fi', sharpenScore: 83, mainKPI: 'ROAS 4.8x', specialization: 'E-commerce', country: 'Finland' },
  { id: 7, name: 'Suomi Media', slug: 'suomi-media', logo: 'https://logo.clearbit.com/suomimedia.fi', sharpenScore: 80, mainKPI: 'CPL €9', specialization: 'Paid Ads', country: 'Finland' },
  { id: 8, name: 'Helsinki Digital', slug: 'helsinki-digital', logo: 'https://logo.clearbit.com/helsinkidigital.fi', sharpenScore: 77, mainKPI: 'CTR 7.2%', specialization: 'Content Marketing', country: 'Finland' },
  { id: 9, name: 'Arctic Growth', slug: 'arctic-growth', logo: 'https://logo.clearbit.com/arcticgrowth.fi', sharpenScore: 74, mainKPI: 'Conversion Rate 10%', specialization: 'SaaS Growth', country: 'Finland' },
  { id: 10, name: 'Lakeside Agency', slug: 'lakeside-agency', logo: 'https://logo.clearbit.com/lakesideagency.fi', sharpenScore: 71, mainKPI: 'Lead Cost €11', specialization: 'CRO & Creatives', country: 'Finland' },
];

export default function AgencyProfile() {
  const router = useRouter();
  const { slug } = router.query;
  const agency = allAgencies.find((a) => a.slug === slug);

  if (!agency) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1>Agency not found</h1>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      {agency.logo && (
        <img src={agency.logo} alt={`${agency.name} logo`} style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '1rem' }} />
      )}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{agency.name}</h1>
      <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sharpen Score: <strong>{agency.sharpenScore}</strong></div>
      <div style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Main KPI: {agency.mainKPI}</div>
      <div style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>{agency.specialization} · {agency.country}</div>
      <div style={{ maxWidth: '600px', fontSize: '1rem', color: '#666', backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        "{agency.name} helps businesses grow through {agency.specialization.toLowerCase()} excellence. Learn how we achieve exceptional results."
      </div>
    </div>
  );
}
