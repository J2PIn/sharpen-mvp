import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '2rem', 
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        See who REALLY delivers the results.
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Discover the first-ever index where marketing results are public, measurable, and competitive. Find the agency that truly delivers results for your business.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/index" passHref>
          <a style={{
            backgroundColor: '#000', 
            color: '#fff', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            See the Index
          </a>
        </Link>
        <Link href="/submit" passHref>
          <a style={{
            backgroundColor: '#f0f0f0', 
            color: '#000', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            border: '1px solid #ccc'
          }}>
            Submit KPIs
          </a>
        </Link>
      </div>
    </div>
  );
}
