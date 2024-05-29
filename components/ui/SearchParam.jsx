import { Select } from "./Select";
export default function SearchParam() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-lg font-semibold">Filters</h2>
      <div className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="genre"
          >
            Genre
          </label>
          <Select className="mt-1 block w-full" id="genre" name="genre">
            <option>All</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Romance</option>
            <option>Sci-Fi</option>
          </Select>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="year"
          >
            Year
          </label>
          <Select className="mt-1 block w-full" id="year" name="year">
            <option>All</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
          </Select>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="type"
          >
            Type
          </label>
          <Select className="mt-1 block w-full" id="type" name="type">
            <option>All</option>
            <option>Movie</option>
            <option>TV Show</option>
            <option>Documentary</option>
          </Select>
        </div>
      </div>
    </div>
  );
}
