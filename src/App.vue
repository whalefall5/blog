<template>
  <div id="app">
      <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">首页</el-menu-item>
   <el-menu-item index="2" >添加博客</el-menu-item>
  <el-menu-item index="3" >归档</el-menu-item>
  <el-menu-item index="4"><a >关于山猪</a></el-menu-item>
  <el-menu-item  ><el-input v-model="input" placeholder="请输入内容"></el-input></el-menu-item>
</el-menu>
  <bg></bg>
  </div>
</template>
<script>
import bg from "./view/background"
export default {
  data () {
    return {
    
    }
  },
  components: {
    bg
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}



</style>
