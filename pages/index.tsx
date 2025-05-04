import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharpen Index</title>
        <meta name="description" content="See who REALLY delivers the results." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl w-full text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            See who REALLY delivers the results.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the first-ever index where marketing results are public, measurable, and competitive.
          </p>
          <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Think of it like a stock market — but for agencies. Daily-updated KPIs. No fluff. Full transparency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/agencies">
              <a className="bg-black text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-800 transition">
                See the Index
              </a>
            </Link>
            <Link href="/submit">
              <a className="bg-white text-black px-6 py-3 rounded-xl font-semibold border border-gray-300 shadow hover:bg-gray-100 transition">
                Submit KPIs
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
