module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '#ui': './src/ui',
          '#hooks': './src/hooks',
          '#models': './src/models',
          '#navigators': './src/navigators',
          '#screens': './src/screens',
          '#services': './src/services',
          '#store': './src/store',
          '#theme': './src/theme',
          '#utils': './src/utils',
          '#modals': './src/modals',

          '#ui/*': './src/ui/*',
          '#hooks/*': './src/hooks/*',
          '#models/*': './src/models/*',
          '#navigators/*': './src/navigators/*',
          '#screens/*': './src/screens/*',
          '#services/*': './src/services/*',
          '#store/*': './src/store/*',
          '#theme/*': './src/theme/*',
          '#utils/*': './src/utils/*',
          '#modals/*': './src/modals/*',
        },
      },
    ],
    'inline-dotenv',
  ],
};
