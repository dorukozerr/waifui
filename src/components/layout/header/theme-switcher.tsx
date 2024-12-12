"use client";

import { YStack } from "tamagui";
import { useThemeSetting } from "@tamagui/next-theme";
import { Moon, Sun, MonitorCog } from "lucide-react";
import { setThemePreference } from "@/actions/theme";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/waifui/popover";
import { Button } from "@/components/waifui/button";

export const ThemeSwitcher = () => {
  const { set, resolvedTheme, systemTheme } = useThemeSetting();

  const themeVariants = [
    {
      label: (
        <>
          <Sun style={{ width: "1.2rem", height: "1.2rem" }} />
          Light
        </>
      ),
      onPress: async () => {
        set("light");
        await setThemePreference("light");
      },
    },
    {
      label: (
        <>
          <Moon style={{ width: "1.2rem", height: "1.2rem" }} />
          Dark
        </>
      ),
      onPress: async () => {
        set("dark");
        await setThemePreference("dark");
      },
    },
    {
      label: (
        <>
          <MonitorCog style={{ width: "1.2rem", height: "1.2rem" }} />
          System
        </>
      ),
      onPress: async () => {
        set(systemTheme ?? "dark");
        await setThemePreference(systemTheme ?? "dark");
      },
    },
  ];

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outlined" size="icon">
          {resolvedTheme === "dark" ? (
            <Moon style={{ width: "1.2rem", height: "1.2rem" }} />
          ) : resolvedTheme === "light" ? (
            <Sun style={{ width: "1.2rem", height: "1.2rem" }} />
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <YStack w="$10" gap="$2" bg="transparent">
          {themeVariants.map(({ label, onPress }, index) => (
            <PopoverClose key={`themeSwitcher-${index}`}>
              <Button variant="outlined" onPress={onPress} w="100%">
                {label}
              </Button>
            </PopoverClose>
          ))}
        </YStack>
      </PopoverContent>
    </Popover>
  );
};
