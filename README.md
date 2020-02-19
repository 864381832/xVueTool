<h2 align="center">X - tool 开发小工具集合web版</h2>

### 安装步骤
-----

``` bash
# 安装依赖
npm install

# 访问地址 localhost:8088
npm run dev

# 编译打包
npm run build
```

### 演示地址
-----
演示地址 [https://xwintop.gitee.io/xvuetool](https://xwintop.gitee.io/xvuetool "x-tool")

### 目录结构
-----

```
├── build                       // help
├── config                      // 配置文件
├── src                         // 核心代码
│   ├── assets
│   │   ├── css                 // 自定义样式文件
│   │   └── images              // 图片文件
│   ├── auth                    // 登录认证相关
│   ├── components              // vue 组件
│   ├── config                  // 配置控制
│   ├── json                    // json 文件
│   ├── router                  // 路由控制
│   ├── store                   // vuex 存储
│   │   ├── modules
│   │   ├── getter.js
│   │   └── index.js
│   ├── utils                   // 工具
│   ├── views                   // 视图
│   │   ├── basic               // 基础组件
│   │   ├── components          // 视图组件
│   │   ├── editor              // 编辑器组件
│   │   ├── home.vue            // 项目主框架
│   │   ├── login.vue           // 登录
│   │   └── settings.vue        // 侧边设置
│   ├── App.vue                 // 根路由视图
│   └── main.js                 // 项目入口
├── static
│   └── .gitkeep
├── test
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .postcssrc.js
├── README.md                     // read me
├── index.html                    // 项目首页
├── package-lock.json
└── package.json
```
