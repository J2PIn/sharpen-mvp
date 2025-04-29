import Link from 'next/link';

export default function SubmitSuccess() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉 Submission Received!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Thank you for sharpening the competition.
      </p>
      <Link href="/agencies">
        <a style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1rem',
          textDecoration: 'none'
        }}>
          Back to Index
        </a>
      </Link>
    </div>
  );
}

