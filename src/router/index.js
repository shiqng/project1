import Vue from 'vue';
// vue-router
import VueRouter from 'vue-router';
// 首页
import Home from '../views/Home.vue';
import RealSence from '../views/realSence.vue';
import lm from '../components/XianGtac/Zjzl/lm.vue';

// vue框架引入
Vue.use(VueRouter)
// 解决报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    },
    {
        path: '/lm',
        name: 'lm',
        component: lm
    },
    {
      path: '/GtacXiAn',
      name: 'GtacXiAn',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ '../views/gtacXiAn.vue')
      }
    },
    {
      path: '/realSence',
      name: 'RealSence',
      component: RealSence,
    },
    {
      path: '/inventedSence',
      name: 'InventedSence',
      component: function () {
        return import(/* webpackChunkName: "about" */ '../views/inventedSence.vue')
      },
      children: [
        {
          path: 'development',
          name: 'Development',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/development.vue')
          },
        },
        {
          path: 'messageBar',
          name: 'MessageBar',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/messageBar.vue')
          },
        },
        {
          path: 'imagesComponent',
          name: 'ImagesComponent',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/imagesComponent.vue')
          },
        },
        {
          path: 'imagesComponentKea',
          name: 'ImagesComponentKea',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/imagesComponentKea.vue')
          },
        },
        {
          path: 'dtImage',
          name: 'DtImage',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/dtImage.vue')
          },
        },
        {
          path: 'khxyzxVideoPhone',
          name: 'KhxyzxVideoPhone',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/khxyzxVideoPhone.vue')
          },
        },
        {
          path: 'khxyzxVideoEmail',
          name: 'KhxyzxVideoEmail',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/khxyzxVideoEmail.vue')
          },
        },
        {
          path: 'khxyzxVideoWeb',
          name: 'KhxyzxVideoWeb',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/khxyzxVideoWeb.vue')
          },
        },
        {
          path: 'jjzzzxVideoPlatform',
          name: 'JjzzzxVideoPlatform',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/jjzzzxVideoPlatform.vue')
          },
        },
        {
          path: 'jjzzzxVideoOnline',
          name: 'JjzzzxVideoOnline',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/jjzzzxVideoOnline.vue')
          },
        },
        {
          path: 'jjzzzxVideoConvening',
          name: 'JjzzzxVideoConvening',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/jjzzzxVideoConvening.vue')
          },
        },
        {
          path: 'jjzzzxVideoProgress',
          name: 'JjzzzxVideoProgress',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/jjzzzxVideoProgress.vue')
          },
        },
        {
          path: 'jjzzzxVideoAnalysis',
          name: 'JjzzzxVideoAnalysis',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/jjzzzxVideoAnalysis.vue')
          },
        },
        {
          path: 'jjzzzxVideoReview',
          name: 'JjzzzxVideoReview',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/jjzzzxVideoReview.vue')
          },
        },
        {
          path: 'khjlzxVideoKea',
          name: 'KhjlzxVideoKea',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/khjlzxVideoKea.vue')
          },
        },
        {
          path: 'khjlzxVideoKeaOktoberfest',
          name: 'KhjlzxVideoKeaOktoberfest',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/khjlzxVideoKeaOktoberfest.vue')
          },
        },
        {
          path: 'khjlzxVideoKeaEarthquake',
          name: 'KhjlzxVideoKeaEarthquake',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/khjlzxVideoKeaEarthquake.vue')
          },
        },
        {
          path: 'khjlzxVideoBusiness',
          name: 'KhjlzxVideoBusiness',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/khjlzxVideoBusiness.vue')
          },
        },
        {
          path: 'khxyzxVideoB2b',
          name: 'KhxyzxVideoB2b',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/khxyzxVideoB2b.vue')
          },
        },
        {
          path: 'csyzzx1Cover',
          name: 'Csyzzx1Cover',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/csyzzx1Cover.vue')
          },
        },
        {
          path: 'csyzzxCover',
          name: 'CsyzzxCover',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inventedSencePages/csyzzxCover.vue')
          },
        },
        {
          path: 'zjzl',
          name: 'Zjzl',
          component: function () {
            return import(/* webpackChunkName: "about" */ '../components/XianGtac/Zjzl/zjzlShow.vue')
          },
        }, 
      ]
    },
];

// vue初始化
const router = new VueRouter({
  routes
});

// 导出路由
export default router;
