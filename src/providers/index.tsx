"use client";

import "@tamagui/core/reset.css";
import "@tamagui/polyfill-dev";

import { useState, useEffect, ReactNode } from "react";
// import { StyleSheet } from "react-native";
import { useServerInsertedHTML } from "next/navigation";
import { TamaguiProvider } from "tamagui";
import {
  NextThemeProvider,
  useRootTheme,
  getSystemTheme,
} from "@tamagui/next-theme";
import tamaguiConfig from "../../tamagui.config";

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = getSystemTheme();
  const [theme, setTheme] = useRootTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const preferredTheme = localStorage.getItem("theme");

    if (preferredTheme === "system") {
      setTheme(systemTheme);
    } else if (preferredTheme) {
      setTheme(preferredTheme as "light" | "dark");
    }
  }, [setTheme, systemTheme]);

  if (!isMounted) {
    return null;
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
