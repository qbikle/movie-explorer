import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarIcon";

export default function MovieCard({ movie }) {
  return (
    <div className="group">
      <Link href={`/movies/${movie.imdbID}`}>
        <div className="relative aspect-[2/3] overflow-hidden rounded-xl group max-w-[400px]">
          <Image
            alt="Movie Poster"
            className="object-cover transition duration-300 group-hover:scale-105     mx-auto aspect-[2/3] overflow-hidden rounded-xl ease-in-out transform group-hover:brightness-50 "
            fill
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300"
            }
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-white">
            <div class="text-lg md:text-xl select-none">
              <div class="flex justify-start">
                <p class="text-sm md:text-base font-semibold text-gray-300">
                  Year:
                </p>
                <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                  {movie.Year}
                </p>
              </div>
              <div class="flex justify-start">
                <p class="text-sm md:text-base font-semibold text-gray-300">
                  Rated:
                </p>
                <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                  {movie.Rated}
                </p>
              </div>
              <div class="flex justify-start">
                <p class="text-sm md:text-base font-semibold text-gray-300">
                  Genre:
                </p>
                <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                  {movie.Genre}
                </p>
              </div>
              <div class="flex justify-start">
                <p class="text-sm md:text-base font-semibold text-gray-300">
                  Director:
                </p>
                <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                  {movie.Director}
                </p>
              </div>
              <p class="text-sm md:text-base font-semibold text-gray-300">
                Plot:
              </p>
              <p class="text-sm md:text-base text-gray-100">{movie.Plot}</p>
            </div>
          </div>
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
