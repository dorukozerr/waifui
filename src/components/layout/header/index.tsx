"use client";

import { useContext } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  Header as TamaguiHeader,
  ScrollView,
  XStack,
  YStack,
  Separator,
} from "tamagui";
import { Menu } from "lucide-react";
import { HeaderContext } from "@/context/header-context";
import { useScreenSize } from "@/hooks/useScreenSize";
import { baseIconStyle } from "@/lib/constants";
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
      (e) => e.ThemeSwitcher
    ),
  {
    ssr: false,
    loading: () => <Button size="icon" variant="outlined"></Button>,
  }
);

export const Header = () => {
  const { push } = useRouter();
  const { sheetState, setSheetState, mobileMenuCategories } =
    useContext(HeaderContext);
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
              <Menu style={baseIconStyle} />
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
          <ScrollView bc="$red5">
            {mobileMenuCategories.map(
              ({ category, subCategories }, categoryIndex) => (
                <YStack key={`mobileMenuItem-${categoryIndex}`}>
                  <Button>{category}</Button>
                  {subCategories.map(({ label, onPress }, subCategoryIndex) => (
                    <Button
                      key={`mobileMenuItem-${categoryIndex}-${subCategoryIndex}`}
                      onPress={onPress}
                    >
                      {label}
                    </Button>
                  ))}
                  <Separator />
                </YStack>
              )
            )}
          </ScrollView>
        </SheetFrame>
      </Sheet>
    </>
  );
};
