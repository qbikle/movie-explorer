import React from "react";

export default function SearchParam({
  selectedYear,
  setSelectedYear,
  selectedType,
  setSelectedType,
}) {
  const genres = [
    "All",
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
  ];
  const years = ["All", "2024", "2023", "2022", "2021", "2020", "2019"];
  const types = ["All", "Movie", "Series", "Episode"];

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-lg font-semibold">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 select-none dark:text-gray-300">
            Year
          </label>
          <div className="mt-1 space-y-2 bg-neutral-100 rounded-md pl-3 py-2">
            <input
              type="number"
              className="rounded-md  border p-1 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            />
            {years.map((year) => (
              <div
                key={year}
                className={`cursor-pointer ${
                  selectedYear === year
                    ? "text-slate-800 underline bg-neutral-200 rounded-md pl-2 mr-3 py-1 select-none font-bold"
                    : "text-gray-700 select-none dark:text-gray-300"
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 select-none dark:text-gray-300">
            Type
          </label>
          <div className="mt-1 space-y-2 bg-neutral-100 rounded-md pl-3 py-2">
            {types.map((type) => (
              <div
                key={type}
                className={`cursor-pointer ${
                  selectedType === type
                    ? "text-slate-800 underline bg-neutral-200 rounded-md pl-2 mr-3 py-1 select-none font-bold"
                    : "text-gray-700 select-none dark:text-gray-300"
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="text-gray-500 dark:text-gray-300 hover:bg-neutral-100 p-2 rounded-xl bg-neutral-200 md:bg-transparent"
        onClick={() => {
          setSelectedYear("All");
          setSelectedType("All");
        }}
      >
        Clear Filters
      </button>
    </div>
  );
}
