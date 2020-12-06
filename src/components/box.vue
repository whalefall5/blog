<template>
  <div class="app" >
 <div class="box"><a href="http://www.beian.miit.gov.cn/">蜀ICP备20013554号</a><span>  | www.fyp.cool  | @whalefall</span>
 <br>
 <span class="tel">QQ:1459930010   WeChat:Mingege1336</span>

 <img src="./../assets/img/mmqrcode1589200478252.png" alt="">
 </div>
  </div>
</template>

<script>
export default {
  name: 'box',
  data () {
    return {
      height:0
    };
  },
  components: {},
  mounted () {
   
  },
  methods: {}
}
</script>

<style  scoped>
.app{
    height: 300px;
    width: 100%;
    /* border: 1px solid red; */
    background: black;
    /* position: fixed;
    bottom: 0; */
    /* position:relative ; */
    font-family: sans-serif;
    font-weight: 300;
}
img{
  width: 80px;
  height: 80px;
  float: right;
  margin-top: -40px;
  margin-left: -50px;
  position: relative;
  right: 25%;
 
}
.box a{
  color: rgba(255, 255, 255, 0.9);
}
.tel{
  margin-top: -50px;
  margin-left: 20px;
}
</style>