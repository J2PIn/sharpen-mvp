import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#111', background: '#fafafa', minHeight: '100vh' }}>
      <nav style={{ padding: '1.5rem 2rem', background: '#fff', borderBottom: '1px solid #eee', display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/" passHref>
          <a style={{
            fontWeight: router.pathname === '/' ? 'bold' : 'normal',
            fontSize: '1.1rem',
            color: router.pathname === '/' ? '#0070f3' : '#333',
            backgroundColor: router.pathname === '/' ? '#f0f8ff' : 'transparent',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'color 0.2s, background-color 0.2s',
            cursor: 'pointer'
          }}>Sharpen</a>
        </Link>
        <Link href="/agencies" passHref>
          <a style={{
            fontWeight: router.pathname.startsWith('/agencies') ? 'bold' : 'normal',
            fontSize: '1rem',
            color: router.pathname.startsWith('/agencies') ? '#0070f3' : '#333',
            backgroundColor: router.pathname.startsWith('/agencies') ? '#f0f8ff' : 'transparent',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'color 0.2s, background-color 0.2s',
            cursor: 'pointer'
          }}>Agencies</a>
        </Link>
        <Link href="/submit" passHref>
          <a style={{
            fontWeight: router.pathname.startsWith('/submit') ? 'bold' : 'normal',
            fontSize: '1rem',
            color: router.pathname.startsWith('/submit') ? '#0070f3' : '#333',
            backgroundColor: router.pathname.startsWith('/submit') ? '#f0f8ff' : 'transparent',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'color 0.2s, background-color 0.2s',
            cursor: 'pointer'
          }}>Submit KPIs</a>
        </Link>
      </nav>
      <main style={{ padding: '3rem 2rem', maxWidth: '960px', margin: '0 auto' }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
