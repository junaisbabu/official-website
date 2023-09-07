import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const inter = Lato({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Junais Babu",
  description: "Junais Babu's official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
