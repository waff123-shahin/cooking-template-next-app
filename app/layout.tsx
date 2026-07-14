// app/layout.js
import { Inter, Lobster } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
