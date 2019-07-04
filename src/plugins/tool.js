export default {
  // 本地图片地址转成线上图片地址。
  getImage(name) {
    let url = weex.config.bundleUrl;
    return url.slice(0, url.lastIndexOf("/")) + "/image/" + name;
  }

};