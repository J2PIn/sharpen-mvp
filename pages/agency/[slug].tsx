import { useRouter } from 'next/router';
import { agencies } from '../../data/agencies';

type KPIType = 'ROAS' | 'CPA' | 'CTR' | 'Conversion Rate' | 'Lead Cost';
type ClientSize = 'smb' | 'mid' | 'enterprise';

function calculateSharpenScore({
  kpiType,
  kpiValue,
  lastUpdated,
  clientSize
}: {
  kpiType: KPIType;
  kpiValue: number;
  lastUpdated: string;
  clientSize: ClientSize;
}): number {
  let score = 0;

  const today = new Date();
  const last = new Date(lastUpdated);
  const diffDays = Math.max(1, Math.floor((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)));
  const recencyWeight = 100 / diffDays;

  switch (kpiType) {
    case 'ROAS':
    case 'Conversion Rate':
    case 'CTR':
      score += kpiValue * 10;
      break;
    case 'CPA':
    case 'Lead Cost':
      score += 100 - kpiValue;
      break;
  }

  score += recencyWeight;

  switch (clientSize) {
    case 'enterprise':
      score += 20;
      break;
    case 'mid':
      score += 10;
      break;
  }

  return Math.max(0, Math.min(100, Math.round(score)));
}

export default function AgencyProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const agency = agencies.find(a => a.slug === slug);

  if (!agency) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Agency not found</h1>
      </div>
    );
  }

  const sharpenScore = calculateSharpenScore({
    kpiType: agency.kpiType as KPIType,
    kpiValue: agency.kpiValue,
    lastUpdated: agency.lastUpdated,
    clientSize: agency.clientSize as ClientSize
  });

  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111' }}>
        {agency.name}
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        Sharpen Score: <strong>{sharpenScore}</strong>
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        Main KPI: <strong>{agency.kpiType} {agency.kpiValue}</strong>
      </p>
      <p style={{
        fontSize: '1rem',
        color: '#555',
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        {agency.slug} has been updated on {agency.lastUpdated} and serves {agency.clientSize} clients.
      </p>
    </div>
  );
}
