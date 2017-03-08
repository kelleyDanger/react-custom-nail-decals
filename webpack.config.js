const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname +'/build',
    publicPath: "/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { 
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loaders: [
          'file-loader',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ] 
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
    ]
  },
  resolve: {
    alias: {
      'images': path.resolve(__dirname, 'client/public/assets/images')
    }
  },
  plugins: [HtmlWebpackPluginConfig]
}