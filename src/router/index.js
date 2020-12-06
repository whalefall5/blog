import Vue from 'vue'
import VueRouter from 'vue-router'

// use

const SingleBlog = () =>import('./../components/SingleBlog')
const home = () =>import('./../view/home')
const test = () =>import('./../view/test')


Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes:[
   
    { path:'',
    redirect: '/home'},
    { path: '/home', component: home },
  { path: '/SingleBlog',name:'SingleBlog', component: SingleBlog },
  { path: '/test',name:'test', component: test }
 ]
})

export default router


