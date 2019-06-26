const path = require('path');

module.exports = {
  // webpack 的选项配置

  // 打包入口js文件
  entry: './src/index.js',

  // 出口配置
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // 模式，环境的配置，指定是开发环境还是生产环境
  // 开发 - development
  // 生产 - production
  mode: 'development',

  module: {
    // loader 规则配置
    rules: [
      {
        // 碰到引入的文件是以 .css 结尾的。那么使用 css-loader 和 style-loader 去处理它。
        // 如果 use 需要使用多个 loader 来处理，需要注意 顺序问题，先要用的写后面。
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use: 'url-loader'
      }
    ]
  },

  // 插件
  plugins: []
};
