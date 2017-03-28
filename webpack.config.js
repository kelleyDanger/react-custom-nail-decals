const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './client/index.js',
  output: {
    publicPath: "/",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { 
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use: {
          loader: 'file-loader' 
        }
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