项目目录结构

```javascript
  ├── app                         编译后项目文件
  ├── node_modules                依赖包
  ├── assets                      静态资源文件
  ├── logs                       服务日志
  ├── src                         源码
  │   ├── abstract                    抽象类
  │   ├── config                      配置项
  │   ├── controller                  控制器
  │   ├── database                    数据库模块
  │   ├── middleware                  中间件模块
  │   ├── models                    数据库表模型
  │   ├── router                      路由模块 - 接口
  │   ├── utils                       工具
  │   ├── app.js                  hapi入口
  ├── .eslintrc.js                eslint 配置
  ├── .gitignore                  忽略提交到git目录文件
  ├── .prettierrc                 代码美化
  ├── ecosystem.config.js         pm2 配置
  ├── nodemon.json                nodemon 配置
  ├── package.json                依赖包及配置信息文件
  ├── tsconfig.json               typescript 配置
  ├── README.md                   描述文件
```
