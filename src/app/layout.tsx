import type { Metadata } from "next";
import { NextTamaguiProvider } from "@/providers";

export const metadata: Metadata = {
  title: "WaifUI",
  description: "Tamagui wrapper for rapid development.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <NextTamaguiProvider>{children}</NextTamaguiProvider>
    </body>
  </html>
);

export default RootLayout;
