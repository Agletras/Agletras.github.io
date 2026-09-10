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
  title: "Agletras — OSINT, Automation, AI Research & Cybersecurity",
  description: "Agletras researches OSINT, cybersecurity, automation, artificial intelligence, and information intelligence to transform open information into actionable insight.",
  openGraph: {
    title: "Agletras — Intelligence From Open Information",
    description: "Agletras researches OSINT, cybersecurity, automation, artificial intelligence, and information intelligence to transform open information into actionable insight.",
    url: "https://agletras.com",
    siteName: "Agletras",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agletras — OSINT, Automation, AI Research & Cybersecurity",
    description: "Transforming open information into actionable insight.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agletras",
    "url": "https://agletras.com",
    "logo": "https://agletras.com/favicon.ico",
    "description": "Agletras is a research-driven technology company focused on Open-Source Intelligence, intelligent automation, artificial intelligence research, cybersecurity, and information analysis.",
    "sameAs": [
      "https://linkedin.com/company/agletras",
      "https://github.com/agletras"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
