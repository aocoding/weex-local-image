const utils = require('./utils')
const config = require('./config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.prod.productionSourceMap
  : config.dev.cssSourceMap
const weexCSS = require('postcss-weex');
module.exports = (options) => {
  return {
    loaders: utils.cssLoaders({
      // sourceMap: use sourcemao or not.
      sourceMap: options && sourceMapEnabled,
      // useVue: use vue-style-loader or not
      useVue: options && options.useVue,
      // usePostCSS: use postcss to compile styles.
      usePostCSS: options && options.usePostCSS
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    postcss: [weexCSS({env: 'weex'})],
    transformToRequire: {
      video: ['src', 'poster'],
      source: 'src',
      img: 'src',
      image: 'src'
    }
  }
}
