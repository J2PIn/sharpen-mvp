import { useRouter } from 'next/router';
import { agencies } from '../../data/agencies';

export default function AgencyProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const agency = agencies.find((a) => a.slug === slug);

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
