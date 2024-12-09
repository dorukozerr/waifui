import type { Metadata } from "next";
import { Providers } from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "waifui",
  description: "Tamagui wrapper for customized copy/paste react components.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
