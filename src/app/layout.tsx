import type { Metadata, Viewport } from "next";
import { Manrope, Song_Myung } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const songMyung = Song_Myung({
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f2e2b" },
    { media: "(prefers-color-scheme: dark)", color: "#0f2e2b" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carelax-web.vercel.app"),
  title: {
    default: `${SITE.nameKo} | ${SITE.tagline}`,
    template: `%s | ${SITE.nameKo}`,
  },
  description: SITE.description,
  applicationName: SITE.nameKo,
  authors: [{ name: SITE.company.legalName }],
  creator: SITE.company.legalName,
  publisher: SITE.company.legalName,
  keywords: [
    "케어렉스",
    "Carelax",
    "안마의자",
    "리클라이너",
    "마사지기",
    "CLX",
    "아너스",
    "샬루트",
    "스마트스토어",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: SITE.nameKo,
    title: `${SITE.nameKo} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.nameKo} — ${SITE.tagline}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.nameKo} | ${SITE.tagline}`,
    description: SITE.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "home goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE.nameKo,
        alternateName: SITE.nameEn,
        url: "https://carelax-web.vercel.app",
        logo: "https://carelax-web.vercel.app/icon.png",
        telephone: SITE.phones.service,
        address: {
          "@type": "PostalAddress",
          streetAddress: "조정대로 150 아이테코 그린존 923호",
          addressLocality: "하남시",
          addressRegion: "경기도",
          postalCode: "12930",
          addressCountry: "KR",
        },
      },
      {
        "@type": "WebSite",
        name: SITE.nameKo,
        url: "https://carelax-web.vercel.app",
        description: SITE.description,
        inLanguage: "ko-KR",
        potentialAction: {
          "@type": "BuyAction",
          target: SITE.flagshipProductUrl,
        },
      },
    ],
  };

  return (
    <html
      lang="ko"
      className={`${manrope.variable} ${songMyung.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-champagne focus:px-4 focus:py-2 focus:text-teal-deep"
        >
          본문으로 건너뛰기
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
