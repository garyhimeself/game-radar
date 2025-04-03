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
  title: "GameRadar - 免费在线小游戏平台",
  description: "GameRadar是一个提供各种免费在线小游戏的平台，无需下载即可畅玩数百款精选游戏。即点即玩，开始您的游戏之旅！",
  keywords: "免费游戏,在线游戏,小游戏,HTML5游戏,网页游戏,休闲游戏,免费玩",
  authors: [{ name: "AI工程团队" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://gameradar.example.com",
    title: "GameRadar - 免费在线小游戏平台",
    description: "即点即玩，无需下载。体验数百款免费在线游戏，随时随地享受游戏乐趣！",
    siteName: "GameRadar",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameRadar - 免费在线小游戏平台",
    description: "即点即玩，无需下载。体验数百款免费在线游戏，随时随地享受游戏乐趣！",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
