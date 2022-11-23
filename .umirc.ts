import { defineConfig } from 'dumi';
import packageJson from './package.json';

const repo = 'dumi-project';

export default defineConfig({
  title: '可视化组件库',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi-template',
    },
  ],
  chainWebpack(memo) {
    memo.resolve.alias.set(packageJson.name, '/src');
    memo.resolve.alias.set('packages', '/packages');
  },
  // more config: https://d.umijs.org/config
});
