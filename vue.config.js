const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: "NorthAndSouth_Build",
    assetsDir: "assets",
    filenameHashing: false,
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        host: "localhost",
        port: 1222, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // 配置多个代理
        proxy: {
            "/nas": {
                target: "http://localhost:1221",// 要访问的接口域名
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/nas': '' //这里理解成用'/mu'代替target里面的地址,
                }
            }
        }
    }
};
