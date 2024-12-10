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

const lightColors = {
  background: "#FFFFFF",
  foreground: "#1E293B",
  muted: "#F1F5F9",
  mutedForeground: "#64748B",
  popover: "#FFFFFF",
  popoverForeground: "#1E293B",
  border: "#E2E8F0",
  input: "#E2E8F0",
  card: "#FFFFFF",
  cardForeground: "#1E293B",
  primary: "#1E293B",
  primaryForeground: "#F8FAFC",
  secondary: "#F1F5F9",
  secondaryForeground: "#1E293B",
  accent: "#F1F5F9",
  accentForeground: "#1E293B",
  destructive: "#FF0000",
  destructiveForeground: "#F8FAFC",
  ring: "#94A3B8",
};

const darkColors = {
  background: "#030712",
  foreground: "#E2E8F0",
  muted: "#1E293B",
  mutedForeground: "#94A3B8",
  popover: "#030712",
  popoverForeground: "#94A3B8",
  border: "#1E293B",
  input: "#1E293B",
  card: "#030712",
  cardForeground: "#E2E8F0",
  primary: "#F8FAFC",
  primaryForeground: "#0F172A",
  secondary: "#1E293B",
  secondaryForeground: "#F8FAFC",
  accent: "#1E293B",
  accentForeground: "#F8FAFC",
  destructive: "#7F1D1D",
  destructiveForeground: "#F8FAFC",
  ring: "#1E293B",
};
const extendedTokens = createTokens({
  ...config.tokens,
  color: {
    ...config.tokens.color,
    ...lightColors,
    ...darkColors,
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
  themes: {
    light: {
      ...config.themes.light,
      ...lightColors,
    },
    dark: {
      ...config.themes.dark,
      ...darkColors,
    },
  },
  settings: {
    ...config.settings,
    onlyAllowShorthands: true,
    fastSchemeChange: false,
  },
});

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
