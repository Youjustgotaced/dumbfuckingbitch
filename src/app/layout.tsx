import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "suiiiiiiiiii",
  description: "Generated by github copilot ",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <title>ur mom</title>
        <link
          rel="icon"
          href="https://cdn.sanriowiki.com/2/23/Cinnamoroll.png"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
