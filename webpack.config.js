const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PackageJson = require('./package.json');

//marco fo app
global.__VERSION__ = PackageJson.version;
global.__ENV__ = process.env.__ENV__ || 'dev';
global.__DEBUG__ = process.env.DEBUG === undefined;
global.__BUILD_TIME__ = Date.now();
global.__CONFIG__ = PackageJson.appCfg[__ENV__];

module.exports = {
  context: __dirname + '/src',
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080",
    'webpack/hot/only-dev-server',
    './index.js'
  ],

  output:{
    path: __dirname + '/dist',
    filename: 'app-bundle-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer!stylus'
      },

      { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },

      { test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  devServer: {
    hot: true
  },
  resolve:{
    extensions:['', '.js','.json', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development' )
      }
    }),

    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.ejs',
      bootupStyle:
      `html,body,#react-app{width:100%;height:100%;margin:0};`,
      bootupJs:
      `__VERSION__="${__VERSION__}";` +
      `__ENV__= "${__ENV__}";` +
      `__DEBUG__ = ${__DEBUG__};` +
      `__INIT_TIME__= Date.now();` +
      `__BUILD_TIME__=${__BUILD_TIME__};` +
      `__CONFIG__=${JSON.stringify(__CONFIG__)};\n` +
      `
          (function() {
            var queryStr = location.search;
            var entryQuery = {};
            if(!!queryStr) {
              var queryItems = queryStr.substr(1).split('&');
              var len = queryItems.length;
              for(var i = 0; i < len; i++) {
                var itemArr = queryItems[i].split('=');
                entryQuery[itemArr[0]] = itemArr[1];
              }
            }
            window.entryQuery = entryQuery;
          })();
        `
    })
  ]
}
