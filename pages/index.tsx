import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4">
      <Head>
        <title>Sharpen Index</title>
        <meta name="description" content="See who REALLY delivers the results" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          See who REALLY delivers the results.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover the first-ever index where marketing results are public, measurable, and competitive. Find the agency that truly delivers results for your business.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/agencies" passHref legacyBehavior>
            <a className="bg-black text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-800 transition">
              See the Index
            </a>
          </Link>
          <Link href="/submit" passHref legacyBehavior>
            <a className="bg-white text-black border border-gray-300 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
              Submit KPIs
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
