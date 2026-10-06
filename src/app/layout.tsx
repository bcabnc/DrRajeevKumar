import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070a13",
};

export const metadata: Metadata = {
  title: "Dr. Rajeev Kumar | Ph.D. (Computer Science & IT) | Patna University",
  description:
    "Official Academic & Research Portfolio of Dr. Rajeev Kumar - Senior Faculty in Computer Science at Patna University, Author of Big Data Analytics & Blockchain on Amazon, and 25+ years pedagogical leader.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  keywords: [
    "Dr Rajeev Kumar",
    "Patna University",
    "Computer Science Faculty Patna",
    "Wireless Sensor Networks",
    "Big Data Analytics Author",
    "Blockchain Author Amazon",
    "B.N. College Patna",
  ],
  authors: [{ name: "Dr. Rajeev Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#070a13] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 pb-16 md:pb-0 font-sans">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <MobileQuickBar />
      </body>
    </html>
  );
}
