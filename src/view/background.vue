<template>
  <div class="app">
      <div  class="bg"  v-if="!background"></div>
      <div class="lampon" @click="changebg"></div>
<div id="e_background"  >
	<div id="e_smallstars"></div>
	<div id="e_moon"></div>

</div>

</div>
  
</template>

<script>
// import './../assets/css/main.css'
import './../assets/css/style.css'
import box from './../components/box.vue'
export default {
  name: 'Bg',
  data () {
    return {
        background:false
    };
  },
  components: {
   box
  },
  mounted () {
     
  },
  methods: {
      
       changebg(){
          this.background=!this.background
          console.log(this.background)
      }
  }
}
</script>

<style  scoped>


.bg{
  background-image: url('./../assets/img/index.png');
   height:1955px;
   position: absolute;
   z-index: 1000 !important;
   border: 1px solid red;
}
.lampon  {
  width: 80px;
  height: 160px;
  background: url('./../assets/img/lampoff.4ca4d48a.png');
  background-size: 100% 100%;
position: absolute;
  top: 60px;
  left: 20px;
  z-index: 10000;
  
}
.lampon:hover{
  background: url('./../assets/img/lampon.372e8604.png');
   background-size: 100% 100%;
   width: 80px;
  height: 200px;
  z-index: 10000;
}
.e_background{

    z-index: 10;
    position: relative;
    
}
</style>