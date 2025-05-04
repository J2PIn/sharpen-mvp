import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 flex flex-col items-center px-4 py-20">
      <Head>
        <title>Sharpen Index</title>
        <meta name="description" content="See who REALLY delivers the results." />
      </Head>

      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          See who REALLY delivers the results.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-700">
          Discover the first-ever index where marketing results are public, measurable, and competitive. Find the agency that truly delivers results for your business.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/agencies">
            <a className="bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              See the Index
            </a>
          </Link>
          <Link href="/submit">
            <a className="bg-white text-black font-semibold px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Submit KPIs
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-16 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h3 className="font-bold text-lg mb-2">Transparent Rankings</h3>
          <p className="text-sm text-gray-600">
            Agencies ranked by real marketing KPIs. No fluff, just results.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h3 className="font-bold text-lg mb-2">Daily Updates</h3>
          <p className="text-sm text-gray-600">
            Like watching the stock market—see who’s rising, who’s not.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h3 className="font-bold text-lg mb-2">Client Confidence</h3>
          <p className="text-sm text-gray-600">
            Choose your marketing agency with data-backed confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
