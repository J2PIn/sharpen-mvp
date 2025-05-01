import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4">
      <Head>
        <title>Sharpen Index</title>
      </Head>
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 text-center border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          See who REALLY delivers the results.
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Discover the first-ever index where marketing results are public, measurable, and competitive. Find the agency that truly delivers results for your business.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/agencies">
            <a className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-md hover:bg-gray-900 transition">
              See the Index
            </a>
          </Link>
          <Link href="/submit">
            <a className="px-6 py-3 bg-white text-black font-semibold border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Submit KPIs
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#fff' }}>
        <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
          See who REALLY delivers the results.
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Discover the first-ever index where marketing results are public, measurable, and competitive. Find the agency that truly delivers results for your business.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/agencies">
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
          <Link href="/submit">
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

      {/* Leaderboard Preview */}
      <div style={{ padding: '2rem', backgroundColor: '#fff', marginTop: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Top Agencies Today</h2>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1rem',
          padding: '1rem 0',
          justifyContent: 'center'
        }}>
          {['Disruptive Advertising', 'SmartSites', 'Lyfe Marketing', 'Tulos Helsinki'].map((name, idx) => (
            <div key={idx} style={{
              minWidth: '220px',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
              textAlign: 'center'
            }}>
              <strong>{name}</strong>
              <div style={{ marginTop: '0.5rem' }}>Sharpen Score: {95 - idx}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '300px' }}>
            <h3>📊 Agencies Report KPIs</h3>
            <p>Marketing firms submit real performance data such as ROAS, CPA, CTR, or Conversion Rates.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <h3>⚙️ Sharpen Ranks Them</h3>
            <p>We normalize and score agencies using our proprietary formula based on performance and consistency.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <h3>🏆 You Choose With Confidence</h3>
            <p>Companies can now choose partners based on data — not fluff or pitch decks.</p>
          </div>
        </div>
      </div>

      {/* Why It Matters */}
      <div style={{ padding: '3rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Why Sharpen?</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          <div style={{ maxWidth: '300px' }}>
            <h3>📈 Transparency</h3>
            <p>We make agency results public. Finally, measurable accountability in marketing.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <h3>⏱️ Updated Daily</h3>
            <p>Sharpen reflects daily changes in performance — like a real market index.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <h3>🔍 Better Decisions</h3>
            <p>Stop relying on guesswork. Find agencies based on what they actually deliver.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f0f0f0',
        marginTop: '2rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Sharpen. All rights reserved.</p>
        <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          <Link href="/agencies"><a style={{ margin: '0 0.5rem' }}>Agencies</a></Link>
          <Link href="/submit"><a style={{ margin: '0 0.5rem' }}>Submit</a></Link>
        </div>
      </footer>
    </div>
  );
}
