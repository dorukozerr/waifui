import { withTamagui } from "@tamagui/next-plugin";

const conf = (_name, { defaultConfig }) => {
  let config = {
    ...defaultConfig,
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    appDir: true,
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};

export default conf;
