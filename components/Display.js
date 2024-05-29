"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import MovieCard from "./ui/HomeCard";

async function fetchMovies() {
  const response = await fetch("/api/movies/default?count=6");
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
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] animate-in">
                  Explore the World of Movies
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  alt="Movie Poster"
                  className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover"
                  height="600"
                  width="400"
                  src="https://i.postimg.cc/9M25pCvS/il-fullxfull-2412674268-1sgm.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Trending Movies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover the Latest Releases
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore a vast collection of movies across various genres and
                  ratings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Movie Explorer. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
