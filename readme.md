# 简介

web 模板脚手架

# 功能

1. 拉取远程仓库代码，支持配置，支持 github、gitlab
2. 支持动态更改: 文件名称、package.json
3. 选择创建 vue、react 等项目
    - vue3 + vite
    - vue3 + webpack
    - react-app + vite
    - react-app + webpack

# 目录结构

project/
├── src/
│ ├── commands/ // 存放命令脚本
│ │ ├── xxx.ts // 单个命令脚本
│ ├── index.ts // 初始化入口文件

# 使用

## 安装

```bash
pnpm i
```

## 打包

```bash
npm run build
```

## 测试

1. 先打包
2. 执行：`npm link`
3. 执行命令: `web-template-cli xxx`
