import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarIcon";

export default function SearchCards({ movie }) {
  return (
    <Link
      key={movie.imdbID}
      href={`/movies/${movie.imdbID}`}
      className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden"
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
        <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 truncate">
          {movie.Title}
        </h3>

        <div className="flex justify-between">
          <p className="text-gray-400 dark:text-gray-600 truncate font-semibold">
            {movie.Year}
          </p>
        </div>
      </div>
    </Link>
  );
}
