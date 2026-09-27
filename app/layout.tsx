import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import PlanProvider from "@/context/PlanContext";
import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";

// Fonts: Inter \\
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fonts: Oswald \\
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'FITLOG | Workout & Fitness Tracker',
  description: 'Log workouts, track daily active stats, and monitor progress.',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      
      <body className="min-h-screen flex flex-col">
        <Toaster/>
        <PlanProvider>
            <header><Navbar /></header>
            <main>{children}</main>
            <footer><Footer/></footer>
        </PlanProvider>

      </body>
    </html>
  );
}
