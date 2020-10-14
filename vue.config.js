const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/tw-covid-19/' : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ],
    resolve: {
      alias: {}
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/vendors/_animated.scss";`
      }
    }
  },
  pluginOptions: {
    sitemap: {
      urls: [
        {
          loc: 'https://kingispeak.github.io/tw-covid-19/index.html',
          priority: 1.0,
          changefreq: 'daily'
        },
        {
          loc: 'https://kingispeak.github.io/tw-covid-19/news.html',
          priority: 0.8,
          changefreq: 'daily'
        }
      ],
      outputDir: './dist'
    }
  }
};
