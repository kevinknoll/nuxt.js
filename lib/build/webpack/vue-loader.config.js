'use strict'

module.exports = function () {
  let config = {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    loaders: {
      'js': 'babel-loader?presets[]=es2015&presets[]=stage-2',
      'postcss': 'vue-style-loader!css-loader',
      'less': 'vue-style-loader!css-loader!less-loader',
      'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
      'scss': 'vue-style-loader!css-loader!sass-loader',
      'stylus': 'vue-style-loader!css-loader!stylus-loader',
      'styl': 'vue-style-loader!css-loader!stylus-loader'
    }
  }

  if (!this.dev) {
    // Use ExtractTextPlugin to extract CSS into a single file
    const ExtractTextPlugin = require('extract-text-webpack-plugin')
    config.loaders.css = ExtractTextPlugin.extract({ loader: 'css-loader' })
    config.loaders.scss = ExtractTextPlugin.extract({ loader: 'css-loader!sass-loader', fallbackLoader: 'vue-style-loader' })
    config.loaders.sass = ExtractTextPlugin.extract({ loader: 'css-loader!sass-loader?indentedSyntax', fallbackLoader: 'vue-style-loader' })
    config.loaders.stylus = ExtractTextPlugin.extract({ loader: 'css-loader!stylus-loader', fallbackLoader: 'vue-style-loader' })
    config.loaders.less = ExtractTextPlugin.extract({ loader: 'css-loader!less-loader', fallbackLoader: 'vue-style-loader' })
  }

  // Return the config
  return config
}
