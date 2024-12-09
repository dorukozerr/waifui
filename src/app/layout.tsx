import type { Metadata } from "next";
import { Fira_Sans_Condensed, Fira_Mono } from "next/font/google";
import { Providers } from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "waifui",
  description:
    "Tamagui wrapper for customized copy/paste react primitive components.",
};

// Keep the font declarations for Next.js to load them
const firaCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-fira-sans-condensed",
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={`${firaCondensed.variable} ${firaMono.variable}`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
