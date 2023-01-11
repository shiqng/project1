import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import cnZH from './assets/lang/cn.js';
import enUS from './assets/lang/en.js';
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css' ;
import 'swiper/swiper.scss';
Swiper.use([Pagination, Navigation, Autoplay])
// 中英文切换
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import $ from 'jquery';
Vue.prototype.$ = $;
// 指定全局宽
Vue.prototype.width = 1920;
// 指定全局高
Vue.prototype.height = 1080;
// 添加动作 方法1 判断赋值
Vue.prototype.addOperation = (data,isdata,which)=>{
  // data:判断的值 isdata:判断对比的值 which:操作的位数
  for (let i = 0; i < which.length;i++){
    if(data == isdata[i] && store.state.operationArr[store.state.operationArr.length -1] != which[i]){
      store.state.operationArr.push(which[i]);
    }else{
      continue;
    }
  }
}
// 添加动作 方法2 直接赋值
Vue.prototype.addOperation2 = (which) => {
  // data:判断的值 isdata:判断对比的值 which:操作的位数
  if(store.state.operationArr[store.state.operationArr.length -1] != which){
    store.state.operationArr.push(which);
  }else{
    return false
  }
}
// 使用多文件管理不同的语言是一个好习惯：
const i18n = new VueI18n({
  // 语言标识
  locale: 'en-US',
  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  fallbackLocale: 'en-US',
  messages: {
    'cn-ZH': cnZH,
    'en-US': enUS
  }
});

// normalize
import 'normalize.css/normalize.css';

Vue.config.productionTip = false
// vue初始化
new Vue({
  // 路由
  router,
  // vueX
  store,
  // i18n
  i18n,
  render: h => h(App)
}).$mount('#app');