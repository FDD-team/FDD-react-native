console.log('BABEL CONFIG JSON');
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app': ['./app'],
          '@components': ['./app/components'],
          '@containers': ['./app/containers'],
          '@navigator': ['./app/navigator'],
          '@pages': ['./app/pages'],
          '@store': ['./app/store'],
          '@theme': ['./app/theme'],
          '@utils': ['./app/utils'],
          '@hooks': ['./app/hooks'],
        },
      },
    ],
  ],
};
