"use client";

import { useThemeSetting, getSystemTheme } from "@tamagui/next-theme";
import { Button } from "@/components/waifui/button";

export const ThemeSwitcher = () => {
  const sysTheme = getSystemTheme();
  const themeSetting = useThemeSetting();

  return (
    <>
      <Button onPress={() => themeSetting.set("light")}>
        Change theme: light
      </Button>
      <Button onPress={() => themeSetting.set("dark")}>
        Change theme: dark
      </Button>
      <Button onPress={() => themeSetting.set(sysTheme)}>
        Change theme: system
      </Button>
    </>
  );
};
