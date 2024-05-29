// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Franklin } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});
const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant_garamond",
  weight: ["300", "400", "500", "600", "700"],
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={libre_franklin.variable + " " + cormorant_garamond.variable}
      >
        {children}
      </body>
    </html>
  );
}
