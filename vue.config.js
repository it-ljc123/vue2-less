const path = require("path");
// 引入等比适配插件
const px2rem = require("postcss-px2rem");

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
});
module.exports = {
  //  基本路径
  publicPath: "./",
  //  构建时的输出目录
  outputDir: "dist",
  //  放置静态资源的目录
  assetsDir: "static",
  //文件名哈希
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV == "production",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
  devServer: {
    // 设置代理
    // host: 'localhost',
    port: 8080, //自定义端口
    disableHostCheck: true,
    https: false, //false关闭https，true为开启
    open: false, //自动打开浏览器
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_RUL,
        ws: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          //重写路径，这种是没有我们定义的前缀
          // ['^' + process.env.VUE_APP_BASE_API]: ''
        },
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 全局变量路径
        path.resolve(__dirname, "./src/styles/global.less"),
      ],
    },
  },
  configureWebpack: (config) => {
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
};
