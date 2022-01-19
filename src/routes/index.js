// const cars = require('./carRoute');
// const tests = require('./test');
// const totalArray = [...cars, ...tests]
// module.exports = totalArray

const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename); // 当前文件名

let routes = []; // 所有路由文件

// routes 目录下有子目录时

// 递归读取文件
const readFileList = (dir, routes = []) => {
  const files = fs.readdirSync(dir); // 同步读取当前目录
  // 遍历当前目录下的目录和文件
  files.forEach((item) => {
    var fullPath = path.join(dir, item); // 获取完整目录&文件路径
    const stat = fs.statSync(fullPath); // 同步返回给定目录&文件路径的信息
    // 判断是否是目录
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), routes); //递归读取文件
    } else {
      // 过滤掉隐藏文件、当前文件、非 js 文件r
      if (
        item.indexOf(".") !== 0 &&
        item !== basename &&
        item.slice(-3) === ".js"
      ) {
        // 引入路由模块
        let arr = require(path.join(dir, item));
        // 汇总
        routes.push(...arr);
      }
    }
  });
  return routes;
};
readFileList(__dirname, routes);

module.exports = routes;
