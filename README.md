# weex-local-image

## 开发

```js
// 开发环境
yarn && yarn start
```

### 兼容本地图片实现
本地图片都存放在/src/image 文件夹，通过 tool.getImage("logo.png") 访问图片。在运行和部署时候，图片地址转成网络地址。

本方法适合于web，不适合打包成app的场景。