"use client";

import { useEffect, ReactNode } from "react";
import { StyleSheet } from "react-native";
import { useServerInsertedHTML } from "next/navigation";
import { TamaguiProvider } from "tamagui";
import {
  NextThemeProvider,
  useRootTheme,
  getSystemTheme,
} from "@tamagui/next-theme";
import { Layout } from "@/components/layout";
import tamaguiConfig from "../../tamagui.config";

export const Providers = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useRootTheme();

  useServerInsertedHTML(() => {
    // @ts-expect-error: doc suggests this
    const rnwStyle = StyleSheet.getSheet();

    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: tamaguiConfig.getCSS(),
          }}
        />
      </>
    );
  });

  useEffect(() => {
    const systemTheme = getSystemTheme();

    const preferredTheme = localStorage.getItem("theme");

    if (preferredTheme === "system") {
      setTheme(systemTheme);
    } else if (preferredTheme) {
      setTheme(preferredTheme as "light" | "dark");
    }
  }, [setTheme]);

  return (
    <NextThemeProvider
      enableSystem
      disableTransitionOnChange
      defaultTheme="dark"
      onChangeTheme={(newTheme) => setTheme(newTheme as "dark" | "light")}
    >
      <TamaguiProvider defaultTheme={theme} config={tamaguiConfig}>
        <Layout>{children}</Layout>
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
