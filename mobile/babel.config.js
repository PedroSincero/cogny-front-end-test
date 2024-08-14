module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@pages': './src/pages',
            '@assets': './src/assets',
            '@utils': './src/utils',
            // Adicione mais aliases conforme necessário
          },
        },
      ],
    ],
  };
};
