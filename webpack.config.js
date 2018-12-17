var entry = require('webpack-glob-entry')
var path = require('path')

module.exports = {
  mode: 'development',
  entry: Object.assign(
    {
      main: './src/js/main.js',
    },
    entry(entry.basePath('./src/js'), './src/js/pages/*.js')
  ),
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: '[name].js'
  }
}
