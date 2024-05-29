import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}&plot=full`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      return NextResponse.json({ error: data.Error }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
