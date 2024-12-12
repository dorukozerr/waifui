"use client";

import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { useServerInsertedHTML } from "next/navigation";
import { TamaguiProvider, PortalProvider } from "tamagui";
import { NextThemeProvider } from "@tamagui/next-theme";
import { ThemeContextProvider } from "@/context/theme-context";
import { HeaderContextProvider } from "@/context/header-context";
import { Layout } from "@/components/layout";
import tamaguiConfig from "../../tamagui.config";

export const Providers = ({
  children,
  themePreference,
}: {
  children: ReactNode;
  themePreference?: "light" | "dark";
}) => {
  useServerInsertedHTML(() => {
    // TS workaround I think this is better than @ts-expect-error
    const rnwStyle = (
      StyleSheet as unknown as {
        getSheet: () => { id: string; textContent: string };
      }
    ).getSheet();

    return (
      <>
        <style
          id={rnwStyle.id}
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
        />
        <style dangerouslySetInnerHTML={{ __html: tamaguiConfig.getCSS() }} />
      </>
    );
  });

  return (
    <NextThemeProvider skipNextHead defaultTheme={themePreference ?? "dark"}>
      <TamaguiProvider
        defaultTheme={themePreference ?? "dark"}
        config={tamaguiConfig}
      >
        <ThemeContextProvider>
          <HeaderContextProvider>
            <PortalProvider>
              <Layout>{children}</Layout>
            </PortalProvider>
          </HeaderContextProvider>
        </ThemeContextProvider>
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
