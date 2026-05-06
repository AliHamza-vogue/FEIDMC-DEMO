import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "FIEDMC | Industrial Hub of Pakistan",
  description: "Faisalabad Industrial Estate Development and Management Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      
import type { Metadata } from "next";
import "@/app/globals.css";
import DemoModal from "@/components/DemoModal"; // <-- Import the component

export const metadata: Metadata = {
  title: "FIEDMC",
  description: "FIEDMC one window digital solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <DemoModal /> {/* <-- Add it right here */}
      </body>
    </html>
  );
}
