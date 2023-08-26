# rumble的主页
闲的蛋疼，用vue搓了一个主页。

## 部署

* **安装** [node.js](https://nodejs.org/zh-cn/) **环境**

  > node > 16.16.0  
  > npm > 8.15.0  
  > yarn > 1.22.19
  
* 然后以 **管理员权限** 运行 `cmd` 终端，并 `cd` 到 项目根目录
* 在 `终端` 中输入：

```bash
# 安装依赖
yarn install

# 预览
yarn dev

# 构建
yarn build
```
> 构建完成后，静态资源会在 **`dist` 目录** 中生成，可将 **`dist` 文件夹下的文件**上传至服务器，也可使用 `Vercel` 等托管平台一键导入并自动部署

## 关于

### 灵感来源
* [DMEGO Home](https://i.dmego.cn/)
* [無名の主页](https://www.imsyy.top/)

### 功能

- [x] 载入动画
- [x] Hitokoto 一言
- [x] 移动端适配
- [ ] 特殊日期变灰
- [ ] 完成载入后的隐藏和其他动画

### 技术栈

* [Vue 3](https://cn.vuejs.org/)
* [Vite](https://vitejs.cn/vite3-cn/)
* [TypeScript](https://www.typescriptlang.org/)
* [Scss](https://sass-lang.com/)

### API

* [Hitokoto 一言](https://hitokoto.cn/)