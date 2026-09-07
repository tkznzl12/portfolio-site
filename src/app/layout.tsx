import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Sidebar from "@/components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "Sujin Jung Portfolio",
  description: "프론트엔드 개발자 정수진의 포트폴리오",
  openGraph: {
    title: "Sujin Jung Portfolio",
    description: "프론트엔드 개발자 정수진의 포트폴리오",
    url: "https://sujin-jung-portfolio.netlify.app/",
    siteName: "Sujin Jung Portfolio",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "포트폴리오 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Sidebar />
        <div className={styles.content}>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            © {new Date().getFullYear()} Sujin Jung. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
