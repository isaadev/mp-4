import { Movie } from '../../types';

export default function Card({ title, poster_path, release_date }: Movie) {
  return (
    <div className="bg-black shadow-lg shadow-purple-400/90 max-w-64 p-2 rounded">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-auto max-h-96 rounded border-2 border-black"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-gray-500 text-sm">Release Date: {release_date}</p>
      </div>
    </div>
  );
}
