# 目录结构
|-- config     # 配置文件
	|-- config.default.js
|-- controller # 用于解析用户的输入，处理后返回相应的结果
|-- model      # 数据持久层
|-- middleware # 用于编写中间件
|-- router     # 用于哦欸之URL路由规则
|-- util       # 工具模块
|-- app.js     # 用于自定义启动时的初始化工作

#  Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

```


# 依赖
 "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-validator": "^6.12.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.12.15",
    "morgan": "^1.10.0"
  }