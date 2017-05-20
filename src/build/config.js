'use strict'

module.exports = {
  port: 4000,
  title: 'vue-boilerplate',
  // Set to relative path (e.g. './') if using election
  publicPath: '/',
  babel: {
    babelrc: false,
    presets: ['vue-app'],
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie > 8'],
    }),
    require('postcss-nested'),
  ],
  cssModules: true,
  jsx: true,
}
