import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { Foot } from "./components/foot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GoTravel",
  description: "Find your next Vacation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
