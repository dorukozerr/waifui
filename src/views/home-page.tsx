"use client";

import { ScrollView, YStack } from "tamagui";
import { ThemeSwitcher } from "@/components/header/theme-switcher";
import { Button } from "@/components/waifui/button";

export const HomePage = () => (
  <ScrollView bc="$red5" height="100vh">
    <ThemeSwitcher />
    <YStack padding="$4">
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
    </YStack>
    <YStack padding="$4">
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
    </YStack>
    <YStack padding="$4">
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
    </YStack>
    <YStack padding="$4">
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
    </YStack>
    <YStack padding="$4">
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
      <Button w="$20" bc="$test">
        qwe
      </Button>
    </YStack>
    <Button bc="$pink10">QWEQWEW</Button>
  </ScrollView>
);
