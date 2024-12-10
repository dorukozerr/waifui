"use client";

import { YStack } from "tamagui";
import { useThemeSetting } from "@tamagui/next-theme";
import { Moon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/waifui/popover";
import { Button } from "@/components/waifui/button";

export const ThemeSwitcher = () => {
  const themeSetting = useThemeSetting();

  return (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <YStack gap="$2">
          <Button variant="default">
            <Moon />
            Default
          </Button>
          <Button variant="destructive">Desctructive</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <PopoverClose>
            <Button>Close</Button>
          </PopoverClose>
        </YStack>
      </PopoverContent>
    </Popover>
  );
};
