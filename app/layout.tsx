import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://a-log.in"),
  title: "Elevate | Premium Website Development",
  description: "Stop losing customers to ugly websites. Get a high-converting, lightning-fast website for your business today.",
  keywords: [
    "website development",
    "web design",
    "premium websites",
    "high-converting websites",
    "business website",
    "fast websites",
    "modern web development",
  ],
  authors: [{ name: "Elevate" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://a-log.in",
  },
  openGraph: {
    title: "Elevate | Premium Website Development",
    description: "High-converting, lightning-fast websites for modern businesses.",
    url: "https://a-log.in",
    siteName: "Elevate",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate | Premium Website Development",
    description: "High-converting, lightning-fast websites for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#030014] text-gray-50`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-accent-purple selection:text-white">
        {children}
      </body>
    </html>
  );
}
