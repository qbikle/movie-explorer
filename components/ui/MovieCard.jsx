import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarIcon";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg flex justify-center w-full">
      <Link
        className="bg-white  dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden max-w-[350px] cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
        key={movie.imdbID}
        href={`/movies/${movie.imdbID}`}
      >
        <Image
          alt="Movie Poster"
          className="object-cover"
          height={450}
          width={300}
          src={movie.Poster !== "N/A" ? movie.Poster : "/images/not_found.png"}
          style={{
            aspectRatio: "300/450",
            objectFit: "cover",
            width: "350px",
            height: "auto",
          }}
          priority={false}
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-black mb-2">{movie.Title}</h3>
          <div className="flex justify-between">
            <p className="text-gray-800 text-sm font-semibold">{movie.Genre}</p>
            <p className="text-gray-600 text-sm font-semibold">{movie.Year}</p>
          </div>

          <p className="text-gray-600 text-sm">{movie.Plot}</p>
          {/* Rating */}
          <div className="flex items-end mt-2 text-black w-full h-full">
            Rating:
            <div className="text-gray-600 text-sm font-semibold flex justify-start items-center gap-1 ml-3">
              <div className="text-yellow-400">
                <StarRating rating={movie.imdbRating} />
              </div>
              {movie.imdbRating}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
