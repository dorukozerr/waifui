"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Header as TamaguiHeader, XStack } from "tamagui";
import { Button } from "@/components/waifui/button";

const ThemeSwitcher = dynamic(
  () =>
    import("@/components/layout/header/theme-switcher").then(
      (mod) => mod.ThemeSwitcher
    ),
  { ssr: false }
);

export const Header = () => {
  const router = useRouter();

  return (
    <TamaguiHeader
      p="$4"
      w="100%"
      maw="1440px"
      mx="auto"
      bbw={1}
      boc="$borderColor"
    >
      <XStack w="100%" jc="space-between" ai="center">
        <Button fontSize="lg" variant="ghost" onPress={() => router.push("/")}>
          WaifUI
        </Button>
        <XStack gap="$4" ai="center">
          <Button variant="link" onPress={() => router.push("/docs")}>
            Docs
          </Button>
          <Button variant="link" onPress={() => router.push("/components")}>
            Components
          </Button>
          <ThemeSwitcher />
        </XStack>
      </XStack>
    </TamaguiHeader>
  );
};
