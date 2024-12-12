"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Header as TamaguiHeader, XStack } from "tamagui";
import { Menu } from "lucide-react";
import { useScreenSize } from "@/hooks/useScreenSize";
import { Button } from "@/components/waifui/button";
import {
  Sheet,
  SheetOverlay,
  SheetHandle,
  SheetFrame,
} from "@/components/waifui/sheet";

const ThemeSwitcher = dynamic(
  () =>
    import("@/components/layout/header/theme-switcher").then(
      (i) => i.ThemeSwitcher
    ),
  {
    ssr: false,
    loading: () => <Button size="icon" variant="outlined"></Button>,
  }
);

export const Header = () => {
  const [sheetState, setSheetState] = useState({ open: false });
  const { push } = useRouter();
  const { width } = useScreenSize();

  return (
    <>
      <TamaguiHeader
        p="$4"
        w="100%"
        maw="1440px"
        mx="auto"
        bbw={1}
        boc="$borderColor"
      >
        <XStack w="100%" jc="space-between" ai="center">
          <Button fontSize="lg" variant="ghost" onPress={() => push("/")}>
            WaifUI
          </Button>
          <XStack gap="$4" ai="center" $sm={{ dsp: "none" }}>
            <Button variant="link" onPress={() => push("/docs")}>
              Docs
            </Button>
            <Button variant="link" onPress={() => push("/components")}>
              Components
            </Button>
            <ThemeSwitcher />
          </XStack>
          {width && width < 768 ? (
            <Button
              size="icon"
              variant="outlined"
              onPress={() => setSheetState({ open: true })}
            >
              <Menu style={{ width: "1.2rem", height: "1.2rem" }} />
            </Button>
          ) : null}
        </XStack>
      </TamaguiHeader>
      <Sheet
        open={sheetState.open}
        onOpenChange={(flag) => setSheetState({ open: flag })}
      >
        <SheetOverlay />
        <SheetHandle />
        <SheetFrame>
          <Button>Sheet button</Button>
        </SheetFrame>
      </Sheet>
    </>
  );
};
