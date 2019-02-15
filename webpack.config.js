var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jquery': 'jQuery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/Components/Main.jsx',
      Nav: 'app/Components/Nav.jsx',
      Weather: 'app/Components/Weather.jsx',
      WeatherForm: 'app/Components/WeatherForm.jsx',
      WeatherMessage: 'app/Components/WeatherMessage.jsx',
      About: 'app/Components/About.jsx',
      Examples: 'app/Components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions :['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192',
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
