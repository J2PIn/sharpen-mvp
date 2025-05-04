import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharpen Index</title>
        <meta name="description" content="See who REALLY delivers the results." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              See who REALLY delivers the results.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
              Discover the first-ever index where marketing results are public, measurable, and competitive.
              Find the agency that truly delivers results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/agencies">
                <a className="bg-black text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition">
                  See the Index
                </a>
              </Link>
              <Link href="/submit">
                <a className="bg-white text-black border border-gray-300 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
                  Submit KPIs
                </a>
              </Link>
            </div>
          </div>

          {/* RIGHT: Graphic */}
          <div className="flex justify-center md:justify-end">
            <svg
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-md md:max-w-lg"
            >
              <path
                d="M100 300 C150 250, 200 200, 250 180 C300 160, 350 170, 400 140 C450 110, 500 100, 550 120"
                stroke="#4F46E5"
                strokeWidth="4"
                fill="none"
              />
              <circle cx="100" cy="300" r="5" fill="#4F46E5" />
              <circle cx="250" cy="180" r="5" fill="#4F46E5" />
              <circle cx="400" cy="140" r="5" fill="#4F46E5" />
              <circle cx="550" cy="120" r="5" fill="#4F46E5" />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}
