const { transform } = require('@babel/core');
const path = require('path')
const fs = require('fs');
const plugins = path.resolve(__dirname, './plugin.js')
const dist = path.resolve(__dirname, './after.js')
const target = path.resolve(__dirname, './before.js')
//读取需要转换的js字符串
const before = fs.readFileSync(target, 'utf8');
//使用babel-core的transform API 和插件进行字符串->AST转化。
const res = transform(`${before}`, {
  plugins: [require(plugins)]
});

// 存在after.js删除
fs.existsSync(dist) && fs.unlinkSync(dist);
// 写入转化后的结果到after.js
fs.writeFileSync(dist, res.code, 'utf8');