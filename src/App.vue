<template>
  <div id="app">
    <div class="nav-bar">
      <el-menu
 
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
  <el-menu-item index="3" >归档</el-menu-item>
  <el-menu-item index="4"><a >关于山猪</a></el-menu-item>
  <el-menu-item  ><el-input  placeholder="请输入内容"></el-input></el-menu-item>
</el-menu>
</div>
<div class="blog">
<router-view></router-view>
</div>


 
</div>
  
  
</template>
<script>
import blogs from './components/Blogs.vue'
import singleblog from './components/SingleBlog.vue'
import bg from './view/background.vue'
import box from './components/box.vue'
import  './assets/css/global.css'
// import home from './view/home'
const home = () =>({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./view/home'),
  // 异步组件加载时使用的组件
  loading: import('./components/laod'),
  // 加载失败时使用的组件
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

export default {
  data () {
    return {
    
    }
  },
  provide(){ //提供
      return {
        reload: this.reload
      }
    },
  components: {
  bg,
  home,
  singleblog,
  blogs,box
 
  }
  
}
</script>

<style>
.footer{
  position: relative;
  bottom: 0;
 
}
.nav{
  height: auto;
}
.blog{
  height: auto;
  width: 100%;
 
 
}

*{
  margin: 0;
  padding: 0;
}
  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }

body{
  background-image: url("./assets/img/index.png");
}
.app{
  height: 100%;
}
</style>
