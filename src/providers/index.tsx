"use client";

import { useState, useEffect, ReactNode } from "react";
import { TamaguiProvider } from "tamagui";
import {
  NextThemeProvider,
  useRootTheme,
  getSystemTheme,
} from "@tamagui/next-theme";

import tamaguiConfig from "../../tamagui.config";

export const Providers = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useRootTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const systemTheme = getSystemTheme();

    setIsMounted(true);

    const preferredTheme = localStorage.getItem("theme");

    if (preferredTheme === "system") {
      setTheme(systemTheme);
    } else if (preferredTheme) {
      setTheme(preferredTheme as "light" | "dark");
    }
  }, [setTheme]);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <NextThemeProvider
      skipNextHead
      onChangeTheme={(newTheme) => {
        setTheme(newTheme as "dark" | "light");
      }}
    >
      <TamaguiProvider defaultTheme={theme} config={tamaguiConfig}>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
