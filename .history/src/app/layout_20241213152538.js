import localFont from "next/font/local";
import "./globals.css";
import { Html, Head } from "next/document"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <Html lang="ko" data-theme="emerald">
        <Head>
          <title>흑우집합소 - 다음 1등은 당신입니다 ^^</title>
        </Head>
      </Html>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
