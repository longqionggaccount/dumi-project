# 🌟 Dumi Template

A doc template can assist you to develop libraries & write docs.

English | [简体中文](./README.zh-CN.md)

## 🚀 How to use?

![](https://gw.alipayobjects.com/zos/bmw-prod/91791904-cdde-4408-959d-72fd0c9049b1/kj80x6lv_w1918_h352.png)

## ✨ Online preview

https://umijs.github.io/dumi-template/

## 📒 Catalog Introduction

```
├── docs                   Component documentation
│   ├── index.md           Home page
│   └── **.**              Site Directory Document
├── src                    Component home directory
│   ├── index.ts           Component registration
│   └── Test                Component development
├── .eslintrc.js           eslint config
├── .fatherrc.ts           father config
├── .umirc.ts              dumi config
└── tsconfig.json          typescript config
```

The rest of the documents can be consulted by yourself.

## 🤖 Command introduction

| Name                    | Description               | Remarks                                                                                                           |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `npm run start`         | Project begining          | Document usage[dumi](https://github.com/umijs/dumi), component development and documentation development together |
| `npm run test`          | Component test            | -                                                                                                                 |
| `npm run test:coverage` | Code coverage review      | -                                                                                                                 |
| `npm run prettier`      | Code prettier             | -                                                                                                                 |
| `npm run build`         | Component packaging       | Use[father](https://github.com/umijs/father)                                                                      |
| `npm run release`       | Component package release | -                                                                                                                 |
| `npm run docs:build`    | Document packaging        | -                                                                                                                 |
| `npm run docs:deploy`   | Document release          | The default is to use GitHub Pages                                                                                |
| `npm run deploy`        | Document package release  | -                                                                                                                 |

### README Badge

Using dumi ? Add a README badge to show it off: [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi)

```
[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi)
```

## how to start

启动

yarn

yarn bootstrap

yarn start

打包文档

yarn docs:build

打包组件

yarn build
