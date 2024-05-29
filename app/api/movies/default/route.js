import { NextResponse } from "next/server";
import savedMovies from "@/public/movies.json";

function getRandomMovies(n) {
  const randomMovies = [];
  const movies = savedMovies;
  const randomIndexes = [];
  while (randomIndexes.length < n) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
      randomMovies.push(movies[randomIndex]);
    }
  }
  return randomMovies;
}

export async function GET(req) {
  const searchParams = new URLSearchParams(req.url.split("?")[1]);
  const count = searchParams.get("count");
  const movieCount = parseInt(count, 10);
  if (isNaN(movieCount) || movieCount <= 0) {
    return new NextResponse({ error: "Invalid movie count" }, { status: 400 });
  }
  const randomMovies = getRandomMovies(movieCount);
  return new NextResponse(JSON.stringify(randomMovies), {
    headers: { "Content-Type": "application/json" },
  });
}
