import type { Metadata } from "next";

// サイト情報の定数
const SITE_TITLE = "てづっぴのプロフィール | tzp Profile";
const SITE_NAME = "てづっぴのプロフィール";
const SITE_URL = "https://tzptzptzptzptzp.github.io/profile/";
const AUTHOR_NAME = "てづっぴ (tzp)";

// 説明文の定数
const FULL_DESCRIPTION =
  "エンジニアてづっぴのプロフィールページです。TypeScript、Next.js、フロントエンド開発が得意です。音楽制作やイラスト制作などクリエイティブな活動も行っています。";
const SHORT_DESCRIPTION =
  "エンジニアてづっぴのプロフィールページです。TypeScript、Next.js、フロントエンド開発が得意です。";

// 画像設定の定数
const OGP_IMAGE_PATH = `${SITE_URL}OGP.png`;
const OGP_IMAGE_ALT = "てづっぴのプロフィール - エンジニア・クリエイター";
const FAVICON_64_PATH = "./favicon_64.ico";
const FAVICON_256_PATH = "./favicon_256.ico";

// テーマカラー
const THEME_COLOR = "#eb5559";

// キーワード
const SITE_KEYWORDS = [
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
];

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: FULL_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
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
    url: SITE_URL,
    title: SITE_TITLE,
    description: SHORT_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: OGP_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: OGP_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SHORT_DESCRIPTION,
    images: [OGP_IMAGE_PATH],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_COLOR },
    { media: "(prefers-color-scheme: dark)", color: THEME_COLOR },
  ],
  icons: {
    icon: [
      { url: FAVICON_64_PATH, sizes: "64x64", type: "image/x-icon" },
      { url: FAVICON_256_PATH, sizes: "256x256", type: "image/x-icon" },
    ],
    shortcut: FAVICON_64_PATH,
    apple: FAVICON_256_PATH,
  },
};
