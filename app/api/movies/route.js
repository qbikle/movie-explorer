import { NextResponse } from "next/server";

export async function GET(req) {
  const apiKey = process.env.OMDB_API_KEY;
  const response = await fetch(
    `http://www.omdbapi.com/?s=movie&apikey=${apiKey}`
  );
  const data = await response.json();
  return new NextResponse(JSON.stringify(data.Search), {
    headers: { "Content-Type": "application/json" },
  });
}
