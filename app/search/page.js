"use client";
import { useState, useEffect, useCallback, Suspense } from "react";
import SearchCards from "@/components/ui/SearchCards";
import Navbar from "@/components/Navbar";
import SearchParam from "@/components/ui/SearchParam";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const API_URL = "https://www.omdbapi.com/";
  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  const handleSearch = useCallback(
    async (query, page) => {
      const params = new URLSearchParams(searchParams);
      params.set("query", query);
      params.set("page", page);
      const newSearch = `?${params.toString()}`;
      const newPath = `${pathname}${newSearch}`;
      router.replace(newPath);

      try {
        const response1 = await fetch(
          `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(
            query
          )}&page=${page}`
        );
        const data1 = await response1.json();

        if (data1.Response === "True") {
          const response2 = await fetch(
            `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${
              page + 1
            }`
          );
          const data2 = await response2.json();

          const combinedResults = [...data1.Search, ...data2.Search];
          setMovies(combinedResults);
          setTotalResults(data1.totalResults || 0);
        } else {
          setMovies([]);
          setTotalResults(0);
        }
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    },
    [API_KEY, pathname, router, searchParams]
  );

  useEffect(() => {
    if (searchParams.has("query")) {
      setSearchQuery(searchParams.get("query"));
    } else {
      setSearchQuery("");
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery, currentPage);
    } else {
      setMovies([]);
      setTotalResults(0);
    }
  }, [searchQuery, currentPage, handleSearch]);

  const handlePageChange = useCallback(
    (page) => {
      setCurrentPage(page);
      const params = new URLSearchParams(searchParams);
      params.set("page", page);
      const newSearch = `?${params.toString()}`;
      const newPath = `${pathname}${newSearch}`;
      router.replace(newPath);
    },
    [searchParams, pathname, router]
  );

  const totalPages = Math.ceil(totalResults / 20);

  return (
    <>
      <Navbar />
      <div key="1" className="grid md:grid-cols-[300px_1fr] gap-8 px-4 md:px-8">
        <SearchParam />
        <div className="max-w-screen-lg">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 flex items-center relative">
            <SearchIcon className="absolute left-[34px] top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Suspense>
              <input
                className="pl-10 pr-12 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search movies..."
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
              />
            </Suspense>
          </div>
          <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:mx-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-3">
            {movies.map((movie, index) => (
              <SearchCards key={index} movie={movie} />
            ))}
          </div>

          {movies.length === 0 && (
            <div className="flex items-center justify-center h-[10rem]">
              <p className="text-2xl text-gray-500 dark:text-gray-400">
                {searchQuery ? "No movies found" : "Search for movies"}
              </p>
            </div>
          )}
          <Suspense>
            {movies.length > 0 && (
              <div className="flex justify-center space-x-4 my-6">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
                >
                  Previous
                </button>
                {currentPage > 1 && (
                  <button
                    onClick={() => handlePageChange(1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    1
                  </button>
                )}
                {currentPage > 2 && <span>...</span>}
                {currentPage > 2 && (
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    {currentPage - 1}
                  </button>
                )}
                <button
                  className="px-4 py-2 bg-blue-700 text-white rounded-md"
                  disabled
                >
                  {currentPage}
                </button>
                {currentPage < totalPages - 1 && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    {currentPage + 1}
                  </button>
                )}
                {currentPage < totalPages - 2 && <span>...</span>}
                {currentPage < totalPages - 1 && (
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    {totalPages}
                  </button>
                )}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
