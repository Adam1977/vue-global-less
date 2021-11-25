const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  pluginOptions: {
    // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/style/index.less')]
    }
  }
}
