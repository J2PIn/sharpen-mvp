import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', textAlign: 'center', backgroundColor: '#f9fafb' }}>

      <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
        <img 
          src="https://uploads-ssl.webflow.com/64b938c646f5a8594fc1f2b9/64e0c76b1a5f8de691edc8db_dashboard-illustration.png" 
          alt="Hero Illustration"
          style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '2rem' }}
        />

        <h1 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: '#111', fontWeight: 'bold' }}>
          See who REALLY delivers the results.
        </h1>

        <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>
          Discover the world's first transparent marketing index. Public, competitive, and based on real performance metrics — not promises.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <Link href="/agencies" passHref>
            <a style={{
              backgroundColor: '#0070f3', 
              color: '#fff', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'background-color 0.2s'
            }}>
              See the Index
            </a>
          </Link>

          <Link href="/submit" passHref>
            <a style={{
              backgroundColor: '#fff', 
              color: '#0070f3', 
              padding: '0.75rem 1.5rem', 
              border: '2px solid #0070f3',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'background-color 0.2s, color 0.2s'
            }}>
              Submit Your KPIs
            </a>
          </Link>
        </div>
      </div>

    </div>
  );
}
