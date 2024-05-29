"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      router.replace("/search");
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl">Uh oh! Nothing to see here.</h1>
      <h2 className="text-2xl font-bold my-2">
        Redirecting in {countdown} seconds...
      </h2>
    </div>
  );
}
