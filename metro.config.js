const { getDefaultConfig } = require("expo/metro-config");

const dotenv = require('dotenv');
// const dotenvExpand = require('dotenv-expand');

// Load environment variables
// const env = dotenv.config();
// dotenvExpand(env);
dotenv.config();
console.log('env: ', process.env.SEPOLIA_KEY);

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  crypto: require.resolve("react-native-crypto"),
  stream: require.resolve("stream-browserify"),
};

module.exports = defaultConfig;
