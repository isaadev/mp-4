import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome, click below</h1>
      <Link
        href="/movies"
        className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition"
      >
        Explore Movies
      </Link>
    </div>
  );
}
