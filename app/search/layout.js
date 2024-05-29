import { Chivo } from "next/font/google";
import { Rubik } from "next/font/google";
import "@/app/globals.css";

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
    <html lang="en">
      <body className={chivo.variable + " " + rubik.variable}>{children}</body>
    </html>
  );
}
