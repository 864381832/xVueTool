::: hljs-center
# X - tool 开发小工具集合web版
:::
### X-tool 是一个前端开发工具集合，基于 vue 2 和 element-ui 2.12.0 开发小工具集合

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

后续准备迁移至react版本的功能

**xJavaFxTool交流QQ群：== [387473650(此群已满)](https://jq.qq.com/?_wv=1027&k=59UDEAD) [1104780992](https://jq.qq.com/?_wv=1027&k=bhAdkju9) ==**
**xJavaFxTool吐个槽：== [进来吐槽](https://support.qq.com/product/127577) ==**

#### 目前集成的小工具有：
1. Cron表达式生成器
2. json格式化编辑工具
3. Base64加密解密
4. md5加密
5. 时间转换：时间戳及时间格式化
6. markdown编辑器
7. xml编辑器

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
