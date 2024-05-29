"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import StarRating from "@/components/ui/StarIcon";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`/api/movies/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const loadingSpinner = (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );

  const errorMessage = <div className="error-message">Error: {error}</div>;

  if (loading) {
    return loadingSpinner;
  }

  if (error) {
    return errorMessage;
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {movie.Title}
          </h1>
          <button
            className="bg-neutral-300 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded m-4"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:w-1/3 w-full">
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={300}
              height={450}
              className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg w-full"
            />
          </div>
          <div className="md:w-2/3 w-full p-6">
            <div className="text-sm md:text-base mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Year:</strong> {movie.Year}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Rated:</strong> {movie.Rated}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Released:</strong> {movie.Released}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Runtime:</strong> {movie.Runtime}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Director:</strong> {movie.Director}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Writer:</strong> {movie.Writer}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Actors:</strong> {movie.Actors}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Plot:</strong> {movie.Plot}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
              <div>
                <p className="text-gray-700">
                  <strong>Language:</strong> {movie.Language}
                </p>
                <p className="text-gray-700">
                  <strong>Country:</strong> {movie.Country}
                </p>
                <p className="text-gray-700">
                  <strong>Awards:</strong> {movie.Awards}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Box Office:</strong> {movie.BoxOffice}
                </p>
                <p className="text-gray-700 flex justify-start gap-2">
                  <strong>IMDB Rating:</strong>
                  <div className="flex justify-start">
                    <div className="text-yellow-400">
                      <StarRating rating={movie.imdbRating} />
                    </div>{" "}
                    {movie.imdbRating}
                  </div>
                </p>
                <p className="text-gray-700">
                  <strong>Metascore:</strong> {movie.Metascore}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
