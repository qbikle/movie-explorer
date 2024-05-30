import { Chivo } from "next/font/google";
import { Rubik } from "next/font/google";
import "@/app/globals.css";

export const metadeta = {
  title: "Search",
};

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo",
});
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export default function Layout({ children }) {
  return (
    <body className={chivo.variable + " " + rubik.variable}>{children}</body>
  );
}
