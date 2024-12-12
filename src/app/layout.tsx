import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Fira_Sans_Condensed, Fira_Mono } from "next/font/google";
import { Providers } from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "WaifUI",
  description:
    "Tamagui wrapper for customized copy/paste react primitive components.",
};

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
}>) => {
  const { get } = cookies();

  const themePreference = get("themePreference");

  return (
    <html lang="en">
      <body className={`${firaCondensed.variable} ${firaMono.variable}`}>
        <Providers
          themePreference={
            themePreference?.value as "light" | "dark" | undefined
          }
        >
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
