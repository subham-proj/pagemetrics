import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PageMetrics",
  description: "Understand Your Website Like Never Before. PageMetrics is a privacy-first website analytics SaaS for actionable insights.",
  openGraph: {
    title: "PageMetrics",
    description: "Understand Your Website Like Never Before. PageMetrics is a privacy-first website analytics SaaS for actionable insights.",
    url: "https://getpagemetrics.netlify.app/",
    siteName: "PageMetrics",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "PageMetrics Dashboard Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PageMetrics",
    description: "Understand Your Website Like Never Before. PageMetrics is a privacy-first website analytics SaaS for actionable insights.",
    images: ["/cover.png"],
    site: "@PageMetrics",
  },
  metadataBase: new URL("https://getpagemetrics.netlify.app/"),
  alternates: {
    canonical: "https://getpagemetrics.netlify.app/",
  },
  keywords: [
    "website analytics",
    "privacy analytics",
    "SaaS analytics",
    "page views",
    "session tracking",
    "referrer analytics",
    "dashboard insights",
    "PageMetrics",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://getpagemetrics.netlify.app/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
