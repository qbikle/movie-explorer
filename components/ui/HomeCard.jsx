import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarIcon";

export default function MovieCard({ movie }) {
  return (
    <div className="group">
      <Link href={`/movies/${movie.imdbID}`}>
        <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
          <Image
            alt="Movie Poster"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300"
            }
          />
        </div>
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-base font-medium">{movie.Title}</div>
        <div className="flex items-center space-x-1 text-yellow-500">
          <StarRating className="h-5 w-5" rating={movie.imdbRating} />
          <span>{movie.imdbRating}</span>
        </div>
      </div>
    </div>
  );
}
