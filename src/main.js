import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AV from 'leancloud-storage';
import VueResource from 'vue-resource'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

var { Query, User } = AV;
AV.init({
    appId: "bIofjaBPaUttY2jKNDDCYubz-gzGzoHsz",
    appKey: "PGgSljYiUW5kogTHWyTvOLSb",
    serverURL: "https://biofjabp.lc-cn-n1-shared.com"
  });

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueResource)
Vue.use(mavonEditor)

Vue.filter('sinppt',function(value){
  if(value.length>100){
    return value.slice(0,100) + "...";
  }
  else{
    return value;
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
