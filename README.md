# vue-global-less
全局less直接使用

目的: 注册全局 less 文件，实现任一 vue 页面可以直接使用全局 less 类及方法等。
探索:

1. 如果 main.js 文件中直接引入 less 文件，在当前的 vue 文件只能在 template 中使用（class），style 中使用报错。
2. 在当前 vue 的 style 中通过@import 引入，是可以实现 template 和 style 中直接使用，但是需要引入
3. 以第 2 步扩展，通过安装 style-resources-loader 和 vue-cli-plugin-style-resources-loader 依赖，以及在 vue.config.js 中配置，可以自动实现导入的效果

## 全局注册 less

1. style/index.less

```js
.mg-r(@var) {
    margin-right: @var;
  }
  .c-red {
    color: red;
  }
  @red: red;
```

2. 配置 vue.config.js

```js
pluginOptions: {
    // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/style/index.less')]
    }
  }
```
