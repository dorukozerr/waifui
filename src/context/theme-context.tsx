"use client";

import { JSX, createContext, ReactNode, useCallback, useMemo } from "react";
import { useThemeSetting } from "@tamagui/next-theme";
import { Sun, Moon, MonitorCog } from "lucide-react";
import { setThemePreference } from "@/actions/theme";
import { baseIconStyle } from "@/lib/constants";

interface ContextProps {
  resolvedTheme?: string;
  themeOptions: {
    label: JSX.Element;
    onPress: () => void;
  }[];
}

const initialState = {
  resolvedTheme: undefined,
  themeOptions: [{ label: <></>, onPress: () => {} }],
};

export const ThemeContext = createContext<ContextProps>(initialState);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const { Provider } = ThemeContext;
  const { set, systemTheme, resolvedTheme } = useThemeSetting();

  const changeTheme = useCallback(
    (newTheme: "light" | "dark" | "system") => {
      set(newTheme === "system" ? systemTheme ?? "dark" : newTheme);
      setThemePreference(
        newTheme === "system" ? systemTheme ?? "dark" : newTheme
      );
    },
    [set, systemTheme]
  );

  const themeOptions: { label: JSX.Element; onPress: () => void }[] = useMemo(
    () =>
      [
        {
          label: (
            <>
              <Sun style={baseIconStyle} />
              Light
            </>
          ),
          onPress: () => changeTheme("light"),
        },
        {
          label: (
            <>
              <Moon style={baseIconStyle} />
              Dark
            </>
          ),
          onPress: () => changeTheme("dark"),
        },
        {
          label: (
            <>
              <MonitorCog style={baseIconStyle} />
              System
            </>
          ),
          onPress: () => changeTheme("system"),
        },
      ] as const,
    [changeTheme]
  );

  return (
    <Provider value={{ resolvedTheme, themeOptions }}>{children}</Provider>
  );
};
