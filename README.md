# Movie Explorer

Movie Explorer is a web application that allows users to search for movies by title and view relevant information such as the title, year, synopsis, and poster image.

## Features

- Display Top Movies as a showcase.
- Search movies by title.
- Display movie details including title, year, synopsis, and poster image.
- Responsive design using Tailwind CSS.

## Technologies Used

- Next.js 14
- Tailwind CSS
- OMDb API
- framer-motion
- v0.dev
- Aceternity UI

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/qbikle/movie-explorer.git
   cd movie-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your OMDb API key:

   ```
   NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application is deployed on Vercel and can be accessed [here](https://movie-explorer-mvg216.vercel.app/).

## Assumptions

- Only basic movie details are displayed for simplicity.
- Error handling for API calls is minimal.

## Future Enhancements

- Add genre filtering.
- Display user ratings and movie trailers if available.
