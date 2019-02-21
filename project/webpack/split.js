const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    plugins: [
        new webpack.HashedModuleIdsPlugin() // 根据模块的相对路径生成 HASH 作为模块 ID
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all', // 默认 async 可选值 all 和 initial
            maxInitialRequests: Infinity, // 一个入口最大的并行请求数
            minSize: 0, // 避免模块体积过小而被忽略
            minChunks: 1, // 默认也是一表示最小引用次数
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/, // 如果需要的依赖特别小，可以直接设置成需要打包的依赖名称
                    name(module, chunks, chcheGroupKey) { // 可提供布尔值、字符串和函数，如果是函数，可编写自定义返回值
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1] // 获取模块名称
                        return `npm.${packageName.replace('@', '')}` // 可选，一般情况下不需要将模块名称 @ 符号去除
                    }
                }
            }
        }
    }
}