const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isProd ? '/tw-covid-19/' : '/',
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
