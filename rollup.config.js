const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const typescript = require("@rollup/plugin-typescript");

const pkg = require("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [peerDepsExternal(), typescript({ tsconfig: "./tsconfig.json" })],
};
