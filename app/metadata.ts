import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "てづっぴのプロフィール | tzp Profile",
  description:
    "エンジニアてづっぴのプロフィールページです。TypeScript、Next.js、フロントエンド開発が得意です。音楽制作やイラスト制作などクリエイティブな活動も行っています。",
  keywords: [
    "てづっぴ",
    "tzp",
    "エンジニア",
    "フロントエンド",
    "TypeScript",
    "Next.js",
    "React",
    "プロフィール",
    "音楽制作",
    "イラスト",
  ],
  authors: [{ name: "てづっぴ (tzp)" }],
  creator: "てづっぴ (tzp)",
  publisher: "てづっぴ (tzp)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://tzptzptzptzptzp.github.io/profile/",
    title: "てづっぴのプロフィール | tzp Profile",
    description:
      "エンジニアてづっぴのプロフィールページです。TypeScript、Next.js、フロントエンド開発が得意です。",
    siteName: "てづっぴのプロフィール",
    images: [
      {
        url: "/OGP.png",
        width: 1200,
        height: 630,
        alt: "てづっぴのプロフィール - エンジニア・クリエイター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "てづっぴのプロフィール | tzp Profile",
    description:
      "エンジニアてづっぴのプロフィールページです。TypeScript、Next.js、フロントエンド開発が得意です。",
    images: ["/OGP.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eb5559" },
    { media: "(prefers-color-scheme: dark)", color: "#eb5559" },
  ],
  icons: {
    icon: [
      { url: "/favicon_64.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/favicon_256.ico", sizes: "256x256", type: "image/x-icon" },
    ],
    shortcut: "/favicon_64.ico",
    apple: "/favicon_256.ico",
  },
};
