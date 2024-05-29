import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    const apiKey = process.env.OMDB_API_KEY;

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from OMDB API");
    }

    const data = await response.json();

    const movies = data.Search || [];
    const totalResults = data.totalResults || "0";

    return NextResponse.json({ movies, totalResults });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
