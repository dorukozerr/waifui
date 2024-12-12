"use client";

import { useContext } from "react";
import { YStack } from "tamagui";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "@/context/theme-context";
import { baseIconStyle } from "@/lib/constants";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/waifui/popover";
import { Button } from "@/components/waifui/button";

export const ThemeSwitcher = () => {
  const { resolvedTheme, themeOptions } = useContext(ThemeContext);

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outlined" size="icon">
          {resolvedTheme === "dark" ? (
            <Moon style={baseIconStyle} />
          ) : resolvedTheme === "light" ? (
            <Sun style={baseIconStyle} />
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <YStack w="$10" gap="$2" bg="transparent">
          {themeOptions.map(({ label, onPress }, index) => (
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
