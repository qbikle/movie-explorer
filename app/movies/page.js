"use client";
import { useEffect, useState } from "react";
import MovieCard from "@/components/ui/MovieCard";
import Navbar from "@/components/Navbar";

async function fetchMovies() {
  const response = await fetch("/api/movies/default?count=12");
  const data = await response.json();
  return data;
}

export default function Component() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function loadMovies() {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    }
    loadMovies();
  }, []);

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8">
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold text-black mb-8">
            Popular Movies
          </h1>
        </div>
        <h2 className="text-2xl font-semibold text-black mb-4 flex items-center">
          Trending Right Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </>
  );
}
