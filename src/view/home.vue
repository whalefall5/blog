<template>
  <div class="app">
    
  
  <blogs class="blogs"></blogs>
  
  <box class="box"></box>
  </div>
</template>

<script>

import blogs from './../components/Blogs'
import box from './../components/box.vue'
export default {
  name: 'home',
  data () {
    return {
      
    };
  },
  components: {
      
    blogs,
    box
  },
  mounted () {},
  methods: {}
}
</script>

<style  scoped>


.blogs{
    position: relative;
    z-index: 1000000;
    width: 100%;
    height: auto;
    top: 20px;
   
    
}
.box{
  height: 180px;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  bottom: 0;
}
</style>