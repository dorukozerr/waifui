import { withTamagui } from "@tamagui/next-plugin";

const nextConfig = (_name, { defaultConfig }) => {
  let config = {
    ...defaultConfig,
    reactStrictMode: true,
    webpack: (config) => {
      config.cache = false;
      return config;
    },
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

export default nextConfig;
