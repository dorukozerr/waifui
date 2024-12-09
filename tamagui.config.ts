import { createTamagui, createFont, createTokens } from "tamagui";

import { config } from "@tamagui/config";

const bodyFont = createFont({
  family: "var(--font-fira-sans-condensed)",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32,
    6: 36,
    7: 40,
    8: 44,
    9: 48,
    10: 52,
  },
  weight: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
});

const monoFont = createFont({
  family: "var(--font-fira-mono)",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32,
    6: 36,
    7: 40,
    8: 44,
    9: 48,
    10: 52,
  },
  weight: {
    4: "400",
    5: "500",
    7: "700",
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
});

const extendedTokens = createTokens({
  ...config.tokens,
  color: {
    test: "#FF0000",
  },
});

export const tamaguiConfig = createTamagui({
  ...config,
  fonts: {
    heading: bodyFont,
    body: bodyFont,
    mono: monoFont,
  },
  tokens: extendedTokens,
  settings: {
    onlyAllowShorthands: true,
  },
});

type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
