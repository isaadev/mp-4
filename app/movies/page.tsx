import MovieCard from '../components/MovieCard';
import { fetchData } from '../lib/fetchData';
import { Movie } from '../../types';
import Link from 'next/link';

export default async function MoviesPage() {
  try {
    const movies: Movie[] = await fetchData();

    return (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Movies</h1>
          <Link href="/" className="text-purple-500 text-3xl">Home</Link>
        </div>
        <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div className="text-red-500 p-6">Error: {(error as Error).message}</div>;
  }
}