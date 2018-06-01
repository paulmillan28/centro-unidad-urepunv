const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
   contentBase: './src',
   host: '0.0.0.0',
port: 8081,
historyApiFallback: {
disableDotRule: true
},
   compress: true,
   disableHostCheck: true
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './' },
      { from: './public/**', to: './' },
      { from: './src/styles/temas/**', to: './styles/temas', flatten: true },
      { from: './src/styles/**', to: './styles', flatten: true }
    ])
  ],
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {

        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.(otf|woff|woff2|eot|ttf|svg|otf)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
};
