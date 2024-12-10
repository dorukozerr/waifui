import Link from "next/link";
import { Header as TamaguiHeader, H1, XStack, Text } from "tamagui";
import { ThemeSwitcher } from "./theme-switcher";

export const Header = () => (
  <TamaguiHeader
    px="$4"
    py="$2"
    w="100%"
    maw="1440px"
    mx="auto"
    bbw={1}
    boc="$borderColor"
  >
    <XStack w="100%" jc="space-between" ai="center">
      <Link href="/">
        <H1>WaifUI</H1>
      </Link>
      <XStack gap="$4" ai="center">
        <Link href="/docs">
          <Text ff="$body">Docs</Text>
        </Link>
        <Link href="/components">
          <Text ff="$body">Components</Text>
        </Link>
        <ThemeSwitcher />
      </XStack>
    </XStack>
  </TamaguiHeader>
);
