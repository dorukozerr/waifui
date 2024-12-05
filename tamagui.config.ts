import { config } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";

const appConfig = createTamagui(config);

export type AppConfig = typeof appConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {
    customTheme?: string;
  }
}

export default appConfig;