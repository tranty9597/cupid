module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@components": "./src/presentation/component",
          "@assets": "./assets",
          "@presentation": "./src/presentation",
          "@core": "./src/core",
          "@domain": "./src/domain",
          "@data": "./src/data",
          "@context": "./src/presentation/context",
          "@di": "./src/di",
        }
      }
    ]
  ]
};
