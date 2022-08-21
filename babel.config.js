module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".ts", ".tsx", ".json"],
        alias: {
          tests: ["./tests/"],
          "@components": "./src/components",
        },
      },
    ],
  ],
};
