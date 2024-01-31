# npm-blog

We can save our blogs on npm

English | [中文（简体）][1]

> ⚠ Warning: This project is only applicable to front-end rendering, if your blog has RSS features, you should **only replace index.html** instead of deleting all files
> Warning: Your blog should meet these requirements when using this project: Hyperlinks to directories with "/" and hyperlinks to files with suffix names
> Warning: Service Worker will automatically add "index.html" to the directory, for example: `https://1919810.com/114514/` -> `https://1919810.com/114514/index.html`
> This project was inspired by [ChenYFan's blog][2].

## English version

### Usage

1. Cloning this project
2. Changing "packageName" in "sw.js" to your own package name
3. Deploying this project
4. Enjoy it!

## 中文版

> ⚠ 警告：本项目仅适用于前端渲染，如果你的博客具有网站地图（sitemap.xml）、RSS 等功能，你应该 **只替换 index.html** 并且保持其他文件部署时仍然存在
> ⚠ 警告：使用本项目时你的博客应该做到这些要求：指向目录的超链接带上“/”，指向文件的超链接带上后缀名
> ⚠ 警告：Service Worker 会自动在目录后加上“index.html”，比如：`https://1919810.com/114514/` -> `https://1919810.com/114514/index.html`
> 本项目灵感来自于 [ChenYFan's Blog][2]

### 使用

1. 克隆这个项目
2. 修改 sw.js 中的 "packageName" 为你的包名
3. 部署
4. 完成！

[1]: <#中文版>
[2]: <https://blog.eurekac.cn/p/d3c51290.html>
