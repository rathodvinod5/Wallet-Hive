const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  crypto: require.resolve("react-native-crypto"),
  stream: require.resolve("stream-browserify"),
};

module.exports = defaultConfig;
