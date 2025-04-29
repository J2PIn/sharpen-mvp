import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#111', background: '#fafafa', minHeight: '100vh' }}>
      <nav style={{ padding: '1rem 2rem', background: '#fff', borderBottom: '1px solid #eee', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link href="/" passHref>
          <a style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333', textDecoration: 'none' }}>Sharpen</a>
        </Link>
        <Link href="/agencies" passHref>
          <a style={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Agencies</a>
        </Link>
        <Link href="/submit" passHref>
          <a style={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Submit KPIs</a>
        </Link>
      </nav>
      <main style={{ padding: '2rem' }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
