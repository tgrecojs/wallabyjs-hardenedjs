module.exports = function (wallaby) {
  return {
    files: ["source/**/*.js", "!source/**/*.test.js"],
    tests: ["source/**/*.test.js"],
    env: {
      type: "node",
      runner: "node",
    },
    compilers: {
      "**/*.js": wallaby.compilers.babel({
        // Tell Wallaby to use Ava's Babel preset, necessary if your project doesn't use Babel otherwise.
        presets: ["@ava/babel/stage-4"],
      }),
    },
    testFramework: "ava",
    debug: true,
  };
};
