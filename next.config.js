import { withTamagui } from "@tamagui/next-plugin";

const nextConfig = (_name, { defaultConfig }) => {
  let config = {
    ...defaultConfig,
    reactStrictMode: true,
    webpack: (config, { dev, isServer }) => {
      if (dev) {
        config.cache = false;
      }

      if (!dev && !isServer) {
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
          tamagui: {
            test: /[\\/]node_modules[\\/](@tamagui|tamagui)[\\/]/,
            name: "tamagui",
            priority: 10,
            reuseExistingChunk: true,
          },
        };
      }

      return config;
    },
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};

export default nextConfig;
