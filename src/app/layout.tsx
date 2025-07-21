import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "디지털 베이스캠프 | 윤종호",
  description:
    "아웃풋이 확실한 개발자 상장청부사 - 개발자 윤종호의 기술 블로그 및 포트폴리오",
  keywords: [
    "개발자",
    "포트폴리오",
    "기술 블로그",
    "윤종호",
    "프론트엔드",
    "백엔드",
    "웹 개발",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Jongho Yoon" }],
  openGraph: {
    title: "디지털 베이스캠프 | 윤종호",
    description:
      "아웃풋이 확실한 개발자 상장청부사 - 개발자 윤종호의 기술 블로그 및 포트폴리오",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 폰트 CDN */}
        <link
          rel="preload"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="font-pretendard antialiased">{children}</body>
    </html>
  );
}
