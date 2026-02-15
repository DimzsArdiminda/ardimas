import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "../components/Head";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Tech Enthusiast",
  description:
    "Portfolio website of Dimas Ardiminda, a passionate tech enthusiast showcasing skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <Head />
      <body>
        <div className="cursor-glow" id="cursorGlow"></div>
        <Header />
        {children}
        <Footer />
        <Script src="/scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
