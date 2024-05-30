"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import MovieCard from "./ui/HomeCard";
import { FlipWords } from "./ui/FlipWords";
import { motion } from "framer-motion";

async function fetchMovies() {
  const response = await fetch("/api/movies/default?count=6");
  const data = await response.json();
  return data;
}

export default function Component() {
  const [movies, setMovies] = useState([]);
  const words = ["Popular", "Trending", "Latest"];
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
              <div className="flex flex-col md:justify-start md:items-start md:content-start justify-center content-center items-center px-4">
                <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-neutral-600 dark:text-neutral-400 text-center md:text-left mb-5 md:mb-1">
                  Check Out
                  <FlipWords words={words} /> <br />
                  movies with the
                  <br />{" "}
                  <div className="underline text-black">Movie Explorer</div>
                </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center md:text-left my-3">
                  Welcome to Movie Explorer – where choosing what to watch
                  becomes an Olympic sport! Dive into our treasure trove of
                  movies and series, because who needs sunlight when you have
                  screens? With enough titles to make even the most decisive
                  person break a sweat, our site is your adrenaline-fueled
                  adventure in procrastination. So, grab your popcorn and get
                  ready to explore – who knows, you might emerge a certified
                  couch potato champion!
                </p>
                <Link
                  className="font-semibold text-md underline"
                  href="/search"
                >
                  <motion.div
                    className="box text-neutral-800 my-6 bg-neutral-200 md:bg-transparent hover:bg-neutral-200 text-2xl hover:dark:bg-neutral-900 rounded-2xl p-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Search for Movies
                  </motion.div>
                </Link>
              </div>
              <Link href="/movies/tt0137523">
                <div className="relative group mb-4 max-w-[400px] md:ml-32">
                  <Image
                    alt="Movie Poster"
                    className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover transition duration-500 ease-in-out transform group-hover:brightness-50 group-hover:scale-[1.01]"
                    height="600"
                    width="400"
                    src="https://i.postimg.cc/9M25pCvS/il-fullxfull-2412674268-1sgm.webp"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-white">
                    <div class="text-lg md:text-xl select-none">
                      <h3 class="text-5xl mb-5 text-white">Fight Club</h3>
                      <div class="flex justify-start">
                        <p class="text-sm md:text-base font-semibold text-gray-300">
                          Year:
                        </p>
                        <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                          1999
                        </p>
                      </div>
                      <div class="flex justify-start">
                        <p class="text-sm md:text-base font-semibold text-gray-300">
                          Rated:
                        </p>
                        <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                          R
                        </p>
                      </div>
                      <div class="flex justify-start">
                        <p class="text-sm md:text-base font-semibold text-gray-300">
                          Runtime:
                        </p>
                        <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                          139 min
                        </p>
                      </div>
                      <div class="flex justify-start">
                        <p class="text-sm md:text-base font-semibold text-gray-300">
                          Genre:
                        </p>
                        <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                          Drama
                        </p>
                      </div>
                      <div class="flex justify-start">
                        <p class="text-sm md:text-base font-semibold text-gray-300">
                          Director:
                        </p>
                        <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                          David Fincher
                        </p>
                      </div>
                      <p class="text-sm md:text-base font-semibold text-gray-300">
                        Plot:
                      </p>
                      <p class="text-sm md:text-base text-gray-100">
                        An insomniac office worker and a devil-may-care soap
                        maker form an underground fight club that evolves into
                        much more.
                      </p>
                      <div class="flex justify-start">
                        <p class="text-sm md:text-base font-semibold text-gray-300">
                          IMDb Rating:
                        </p>
                        <p class="text-sm md:text-base font-bold text-gray-100 ml-2">
                          8.8
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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
            <div className="flex justify-center underline">
              <Link className="font-semibold text-md " href="/movies">
                <motion.div
                  className="box text-neutral-800 my-6 bg-neutral-200 md:bg-transparent hover:bg-neutral-200 text-2xl hover:dark:bg-neutral-900 rounded-2xl p-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Discover Trending Movies
                </motion.div>
              </Link>
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
