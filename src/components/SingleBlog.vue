<template>

  <div class="singblog"  >
      
   
    <div class="blog-box"  ref="test" >
      <h1 class="title">{{title}}</h1>
      <img class="img" :src="urls" alt="">
      <mavon-editor :value="content" class="info"
      :subfield = "prop.subfield"
     :defaultOpen = "prop.defaultOpen"
     :toolbarsFlag = "prop.toolbarsFlag"
     :editable="prop.editable"
     :scrollStyle="prop.scrollStyle"></mavon-editor>
 <div class="Comment">
   
     <span class="Title">评论</span>
   
   <div class="Commnts">
     
      <ul class="Commnts-ul" v-for="(item,key) in comment" :key='key'>
        <li class="Commnts-li"><img src="" class="Head"><span class="Name">{{item.name}}</span><br>
     <p class="Info">{{item.content}}</p></li>
      </ul>
     <textarea v-model="Info" name="" id="Text" cols="20" rows="10" placeholder="  请输入评论"></textarea>
   </div>
    <input type="text" v-model="Name" placeholder=" 请输入用户名" class="Input-Name"> <button :class="{'disabled' :isabled}" :disabled="!Info || !Name"  class="Publish" @click="add">发布</button>
   </div>
  </div>
   
<box class="box"></box>
 </div>

</template>

<script>

import bg from "./../view/background"
import  './../assets/css/global.css'
import box from './box'
import AV from 'leancloud-storage';
AV.init({
    appId: "bIofjaBPaUttY2jKNDDCYubz-gzGzoHsz",
    appKey: "PGgSljYiUW5kogTHWyTvOLSb",
    serverURL: "https://biofjabp.lc-cn-n1-shared.com"
  });
var { Query, User } = AV;

export default {
  name: 'singleblog',
  data () {
    return {
      title:'',
      content:'',
      author:'',
      category:'',
      id:'',
      urls:'',
      height:'',
      box,
      comment:[],
      Info:'',
      Name:''
      
     
      
    };
  },
  components: {
    // bg
    box
  },
  mounted(){
   
  
    
  },
  
  methods: {
    add(){
      console.log("tianjia")
      const blog = AV.Object.extend('blog');
      const blogss= new blog()

const comment = new AV.Object('Comment');
comment.set('content', this.Info);
comment.set('name', this.Name);


const post = AV.Object.createWithoutData('blogss', this.id);
comment.set('post', post);
comment.save()
location. reload()

    }
   
  
  },
    created () {
      // 获取评论
      const that =this
      that.title=that.$route.query.msg
      that.content=that.$route.query.msgs
      that.author=that.$route.query.author
      that.category=that.$route.query.category
      that.id=that.$route.query.id
      that.urls=that.$route.query.url
      console.log(that.urls)
        const post = AV.Object.createWithoutData('Post', that.id);
        const queryc = new AV.Query('Comment');
        queryc.equalTo('post', post);
        queryc.find().then((comments) => {

  // comments 包含与 post 相关联的评论
      for(var i=0;i<=comments.length;i++){
      
         
          that.comment.push(comments[i]._serverData)
          console.log(that.comment[i])
      }
    
});
      // 获取从blogs.vue传递过来的参数
    
  
    },
    destroyed () {
 
    },
  computed: {
    // markdown格式显示所需要代码
     prop () {
          let data = {
            subfield: false,// 单双栏模式
            defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
            editable: false,
            toolbarsFlag: false,
            scrollStyle: true
          }
          return data
        },
        isbaled(){
          if(Info || Name){
              return true
          }
          else{
            return false
          }
        }
  }
}
</script>
<style  scoped>
.Title{
  font-weight: 700;
  font-size: 20px;
  margin-top: 5px;
}
.disabled{
   appearance: none;
  outline: none;
  background: gray;
  border: none;
  color: #fff;
  height: 40px;
  text-align: center;
  width: 60px;
  border-radius: 3px;
}
.Input-Name{
  height: 30px;
  width: 160px;
  border: 1px solid rgb(0,179,171);
  border-radius: 3px;
}
.Publish{
  appearance: none;
  outline: none;
  background: rgb(0,179,171);
  border: none;
  color: #fff;
  height: 40px;
  text-align: center;
  width: 60px;
  border-radius: 3px;

}
.app{
  height: 8900px;
}.Name{
  margin-top: 20px;
}
.Commnts-ul{
  border: 1px solid gainsboro;
  width: 100%;
  height: auto;
  border-radius: 5px;
  vertical-align: middle;
}
.Commnts-li{
  list-style: none;
  width: 100%;
  height: 60px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.Comment{
  width: 96%;
  height: auto;
  margin: 20px auto;
  margin-bottom: 30px;
  border-top: 2px solid rgb(0,179,171);
}
#Text{
  width: 100%;
  border: 1px solid gainsboro;
  margin-top: 20px;
  padding-top: 5px;
  font-size: 16px;
}
.singblog{
  text-align: center;
  height: auto;

 
}
.img{
  width: 98%;
  height: 500px;
  border-radius: 5px;
}
h1{
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 30px;
 
}
.blog-box{
  text-align: center;
  border: 1px solid gainsboro;
  width: 50%;

  position: relative;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  height: auto;
  background: #fff;
  
}
.box{
  width: 100%;
 height: 180px;
 position: relative;
 bottom: 0;
 top: 80px;
}
.info{
  height: auto;
}
</style>