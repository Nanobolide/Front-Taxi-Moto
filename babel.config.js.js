module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }]
      ],
      plugins: [
        "nativewind/babel", 
        require.resolve("expo-router/babel"),
        "module:react-native-dotenv"
      ],
    };
  };
  