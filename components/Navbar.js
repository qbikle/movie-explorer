"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // Get current pathname
  const currentRoute = usePathname();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <FilmIcon className="h-6 w-6" />
        <h1 className="text text-2xl font-normal ml-1">Movie Explorer</h1>
      </Link>
      {currentRoute !== "/search" && (
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="font-semibold text-md underline-offset-4"
            href="/search"
          >
            <motion.div
              className="box text-neutral-800 hover:bg-neutral-200 hover:dark:bg-neutral-900 rounded-2xl p-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Search for Movies
            </motion.div>
          </Link>
        </nav>
      )}
    </header>
  );
}

function FilmIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}
