const { join } = require("path");

module.exports = {
  webpack: {
    configure: (upstream, { env, paths }) => {
      var loaderConfig = upstream.module.rules[2].oneOf[1];
      var packageSrcPaths = [
        join(paths.appSrc, "../../arrgh/src"),
        join(paths.appSrc, "../../hnng/src"),
        join(paths.appSrc, "../../waat/src"),
      ];

      var tsLoaderConfig = {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: packageSrcPaths,
        loader: require.resolve('ts-loader')
      };

      console.log(tsLoaderConfig);

      upstream.module.rules[2].oneOf.splice(2, 0, tsLoaderConfig);

      return upstream;
    }
  }
}
