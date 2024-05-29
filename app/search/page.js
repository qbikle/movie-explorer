"use client";
import SearchCards from "@/components/ui/SearchCards";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import SearchParam from "@/components/ui/SearchParam";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Debounce function
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  useEffect(() => {
    async function fetchData() {
      const query = searchParams.get("query");
      if (query) {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");
        const response1 = await fetch(`/api/search?${params.toString()}`);
        const data1 = await response1.json();

        params.set("page", "2");
        const response2 = await fetch(`/api/search?${params.toString()}`);
        const data2 = await response2.json();

        setMovies([...data1.movies, ...data2.movies]);

        setTotalResults(data1.totalResults);

        params.set("page", "1");

        router.replace(`${pathname}?${params.toString()}`);
      }
    }

    fetchData();
  }, [pathname, router, searchParams]);

  const handleSearch = useCallback(
    debounce(async function (query) {
      const params = new URLSearchParams(searchParams);
      params.set("query", query);
      params.set("page", "1");

      const response1 = await fetch(`/api/search?${params.toString()}`);
      const data1 = await response1.json();

      params.set("page", "2");
      const response2 = await fetch(`/api/search?${params.toString()}`);
      const data2 = await response2.json();

      setMovies([...data1.movies, ...data2.movies]);
      setTotalResults(data1.totalResults);

      params.set("page", "1");

      router.replace(`${pathname}?${params.toString()}`);
    }, 500), // 500ms delay
    [searchParams, router, pathname]
  );

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalResults / 20);

  return (
    <>
      <Navbar />
      <div key="1" className="grid md:grid-cols-[300px_1fr] gap-8 px-4 md:px-8">
        <SearchParam />
        <div className="max-w-screen-lg">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 flex items-center relative">
            <SearchIcon className="absolute left-[34px] top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
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
          </div>
          <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:mx-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-3">
            {movies.map((movie, index) => (
              <SearchCards key={index} movie={movie} />
            ))}
          </div>

          {movies.length === 0 && searchParams.has("query") && (
            <div className="flex items-center justify-center h-[10rem]">
              <p className="text-2xl text-gray-500 dark:text-gray-400">
                No movies found
              </p>
            </div>
          )}

          {movies.length === 0 && !searchParams.has("query") && (
            <div className="flex items-center justify-center h-[10rem]">
              <p className="text-2xl text-gray-500 dark:text-gray-400">
                Search for movies
              </p>
            </div>
          )}

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
        </div>
      </div>
      {/* Make a Featured Movies Horizantal Showcase
      <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:mx-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-3">
        {movies.map((movie, index) => (
          <SearchCards key={index} movie={movie} />
        ))}
      </div> */}
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
