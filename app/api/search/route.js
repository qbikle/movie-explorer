import { NextResponse } from "next/server";
import url from "url";

export async function GET(req) {
  try {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query.query;
    const page = parseInt(parsedUrl.query.page, 10) || 1;
    const apiKey = process.env.OMDB_API_KEY;

    if (!apiKey) {
      throw new Error("OMDB API key is not provided");
    }

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from OMDB API");
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "No results found");
    }

    const movies = data.Search || [];
    const totalResults = data.totalResults || "0";

    return NextResponse.json({ movies, totalResults });
  } catch (error) {
    console.error("Error in /api/search:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
