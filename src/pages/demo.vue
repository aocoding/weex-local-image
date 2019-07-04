<template>
  <div class="wrapper">
    <image :src="imageSrc" class="logo"></image>
    <text class="greeting">{{ txt }}</text>
  </div>
</template>

<script>
import tool from '@/plugins/tool'
export default {
  name: 'App',
  data () {
    return {
      txt: 'Hello Weex!',
      imageSrc:""
    }
  },
  created() {
    this.imageSrc = tool.getImage("logo.png")
  }
}
</script>

<style scoped>
.logo {
  width: 640px;
  height: 300px;
}
.wrapper {
  justify-content: center;
  align-items: center;
}
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
</style>
