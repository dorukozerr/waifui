import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaifUI",
  description: "Tamagui wrapper for rapid development.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
