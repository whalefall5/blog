<template>
  <div class="app">
    <div class="blog">
      <div class="header">
          <span class="article">文章</span>
          <p class="count">共 <span class="num">{{counts}}</span> 篇</p>
      </div>
      
      <ul class="ul-blogs">
          <li class="li-blogs"  v-for="(item,index,key) in blogs" :key="key">
             <router-link    :to="{
          path:'/SingleBlog',
          query:{
            msg:item.title,
            msgs:item.content,
            author:item.author,
            category:item.category,
            id:item.id,
            url:item.url
           
          }
        }" ><h2 class="title">{{item.title}}</h2></router-link>
            <pre class="content">{{item.content|sinppt}}
                <br><br><br>
               <span class="category iconfont">&#xe61b; {{item.category}}</span>
              <span class="author iconfont">&#xe652; {{item.author}}</span>
               <span @click="like(index)" class="like iconfont">&#xe64d; {{item.like}}</span>
              <span class="date  iconfont">&#xe6ae; {{item.year}}-{{item.month}}-{{item.day}}</span>
            </pre>
           
            <img class="img" :src="item.url" alt="">
            
          </li>
          <li class="PageChange"><button v-if="page>=5" @click="pre" class="previous">上一页</button>
            <button v-if="page+5<counts"  @click="next" class="next">下一页</button></li>
          </ul>
        
          
          </div>

          
  </div>
</template>

<script>
import AV from 'leancloud-storage';
AV.init({
    appId: "bIofjaBPaUttY2jKNDDCYubz-gzGzoHsz",
    appKey: "PGgSljYiUW5kogTHWyTvOLSb",
    serverURL: "https://biofjabp.lc-cn-n1-shared.com"
  });
var { Query, User } = AV;
export default {
  name: 'blogs',
  data () {
    return {
      counts:0,
      count:1,
      blogs:[
      ],
     
      bg:[],
      page:0,
      skip:5
       
    };

  },
  props:[],
  inject: ['reload'],
  components: {},
  mounted () {},
  methods: {
    like(index){
      
      console.log("aaaaaaaaaaaaaa")
      // 
      console.log(this.blogs[index].id)
      const todo = AV.Object.createWithoutData('blog', this.blogs[index].id);
      this.blogs[index].like=this.blogs[index].like+1
      console.log(this.blogs[index].like)
      todo.set('content.like', this.blogs[index].like);
      todo.save();
    },
    pre(){
      this.reload
      console.log("aaa")
       var that = this
       that.blogs=[];
    var query = new AV.Query('blog');
    that.page=that.page-that.skip
    var blogs =new Array
     query.skip(that.page).limit(5).select(['content']);
    
   query.find().then(function (blog) {
     for(var i=0;i<=blog.length;i++){
      that.blogs.push(blog[i]._serverData.content);
      
      // 获取对象 的objectid 并set进blogs数组中
      that.$set(that.blogs[i],'id',blog[i].id)

     }
    
});
    },
    next(){
      document.body.scrollTop = 0;
    const query = new AV.Query('blog');
     var that = this
    that.page=that.page+that.skip
    that.blogs=[]
    var blogs =new Array
     query.skip(that.page).limit(5);
   query.find().then(function (blog) {
    console.log(blog)
     for(var i=0;i<=blog.length;i++){
      that.blogs.push(blog[i]._serverData.content);
      // 获取每个 实列的objectid方便增删改查 并且 set进blogs数组
      that.$set(that.blogs[i],'id',blog[i].id)
      console.log(that.blogs[i].id)

     }
    console.log(that.blogs)
});
    
    }
  },
  computed: {
    BackgroundImage() {
		    // 根据背景图数组的长度随机选择索引
		    const randIndex = Math.floor(Math.random() * this.BackgroundImg.length)
		    return {
		        // 获取对应的图片资源并将其设置到`background-image`属性上
		        backgroundImage: `url(${this.BackgroundImg[randIndex]})`
		    }
		}	

  },
  created () {
 
   const query = new AV.Query('blog');
    var that = this
    var blogs =new Array
     query.limit(5).select(['content']);
   query.find().then(function (blog) {
   
     for(var i=0;i<=blog.length;i++){
      that.blogs.push(blog[i]._serverData.content);
      that.$set(that.blogs[i],'id',blog[i].id)
      console.log(that.blogs)
     }
    
});
query.count().then((count) => {
  console.log(`${count} 个 todo 已完成。`);
  that.counts=count
});
  var bg=new Array
const querys = new AV.Query('_File');
 querys.find().then(function (file) {
    
     for(var i=0;i<=file.length;i++){
       console.log(file[i]._serverData.url)
     }
     console.log(that.blogs)
    
});

}
}
  
</script>
<style  scoped>

/* 阿里云图标库 引入 */
@font-face {
  font-family: 'iconfont';  /* project id 1806363 */
  src: url('//at.alicdn.com/t/font_1806363_na8f8cs6dcn.eot');
  src: url('//at.alicdn.com/t/font_1806363_na8f8cs6dcn.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1806363_na8f8cs6dcn.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1806363_na8f8cs6dcn.woff') format('woff'),
  url('//at.alicdn.com/t/font_1806363_na8f8cs6dcn.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1806363_na8f8cs6dcn.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.app{
    height: auto;
    width: 100%;
   text-align: center;
  margin-bottom: 200px;
   
    
}
.single{
  border: 1px solid yellow;
  height: 300px;
  width: 100%;
}
.blog{
  height: auto;
  position: relative;
  
}

  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
video{
  height: 250px;
  width: 200px;
}
.header{
    width: 50%;
    border-bottom:4px solid rgb(0,181,173) ;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    border-top:1px solid gainsboro ;
    border-left: 1px solid gainsboro;
    border-right: 1px solid gainsboro;
    border-radius: 3px;
    background: #fff;
   
}
.article{
    float: left;
    margin-left: 20px;
    font-weight: 1000;
    font-size: 18px;
    color:rgb(0,181,173);
}
.count{
    float: right;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 300;
}
.num{
    color: rgb(242,113,28);
    font-size: 20px;
    font-weight: 1000;
}
.ul-blogs{
  text-align: center;
  margin:0 auto;
  width: 50%;
  height: auto;
  border:1px solid gainsboro;
  
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.li-blogs{
  list-style: none;
  height: 300px;
  width: 100%;
  border:1px solid gainsboro;
}
.li-blogs:nth-last-child(1){
  box-shadow: 0 2px 0 rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

}
.title{
  font-size: 18px;
  font-weight: 550;
  margin-top: 30px;
  margin-left: 30px;
  color: black;
  margin-right: 20%;
}
.content{
  text-align: left;
  margin-top: 20px;
  margin-left: 30px;
  font-size: 16px;
  font-weight: 500;
  width: 60%;
  height: 227px;
  white-space:normal; 
  word-break:break-all;
  overflow: hidden;
}
.img{
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 250px;
  width: 220px;
  float: right;
  margin-top: -276px;
  margin-right: 30px;
  border-radius: 5px;
 
  
}
.img:hover{
  z-index: 1000;
  box-shadow:0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin-top: -277px;
}
.category{
  margin-right: 30px;
  float: left;
  margin-top: 18px;
  font-weight: 600;
  font-size: 16px;
  vertical-align: middle;
}
.author{
  float: left;
  font-weight: 600;
  margin-top: 18px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
}
.PageChange{
  background: #fff;
  list-style: none;
  border: 1.5px solid gainsboro;
  border-top: none;
  height: 80px;
  width: 50%;
  position: absolute;
  line-height: 80px;
  margin-right: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.previous{
  font-weight: 500;
  height: 40px;
  width: 80px;

  border-radius: 3px;
  outline: none;
  appearance: none;
  color: #2ecc71;
  border: 1px solid #2ecc71;
  margin-left: 30px;
}
.next{
  float: right;
  font-weight: 500;
  height: 40px;
  width: 80px;
  border-radius: 3px;
  outline: none;
  appearance: none;
  color: #2ecc71;
  border: 1px solid #2ecc71;
  margin-top: 20px;
  margin-right: 30px;
}
.like{
  float: right;
  font-size: 16px;
  font-weight: 500;
  vertical-align: middle;
  margin-right: 228px;
  margin-top: 12px;
}
.date{
  display: block;
  width: 150px;
  border: red;
  margin-top: 51px;
}

</style>