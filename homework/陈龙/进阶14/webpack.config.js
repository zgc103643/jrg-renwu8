module.exports = {
  entry:  __dirname + "/topic11/entry.js",
  output: {
    path: __dirname + "/topic11",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' ,query: { presets: ['es2015','react'] }},
      { test: /\.css$/, loader: 'style!css?modules!postcss' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      //配置file-loader，加载图片，字体资源
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
    ]
  }
}
