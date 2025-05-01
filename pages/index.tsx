import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharpen Index</title>
        <meta name="description" content="See who REALLY delivers the results." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-gray-50 to-white text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
          See who REALLY delivers the results.
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8">
          Discover the first-ever index where marketing results are public, measurable, and competitive.
          Find the agency that truly delivers results for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/agencies">
            <a className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              See the Index
            </a>
          </Link>
          <Link href="/submit">
            <a className="bg-white text-black font-semibold px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Submit KPIs
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
