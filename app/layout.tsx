import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400","500", "600", "700"],
})
export const metadata: Metadata = {
  title: "Travel CN",
  description: "Start your travel with us",
  icons: {
    icon: "/logo.svg", // Path to your favicon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Travel CN</title>
      </head>
      <body
        className={`${newsreader.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
