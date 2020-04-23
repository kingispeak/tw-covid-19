const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/tw-covid-19/' : '/',
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
    resolve: {
      alias: {
        moment: 'moment/src/moment',
      },
    },
  },
  chainWebpack: (config) => {},
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/vendors/_animated.scss";`,
      },
    },
  },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/news'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
