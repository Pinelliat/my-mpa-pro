const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // index页面的入口
      entry: "src/pages/index/main.js",
      // index页面模板来源
      template: "public/index.html",
      // index页面最终打包在dist目录下输出文件名
      filename: "index.html",
      // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "index",
    },
    login: {
      // login页面的入口
      entry: "src/pages/login/main.js",
      // login页面模板来源
      template: "public/login.html",
      // login页面最终打包在dist目录下输出文件名
      filename: "login.html",
      title: "login",
    },
  },
});
