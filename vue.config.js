module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vue-meta"],
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"), // This line must in sass option
      },
    },
  },
};
