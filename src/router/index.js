import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/account/Login.vue"
import Register from "../views/account/Register.vue"
import Forget from "../views/account/Forget.vue"
const routes = [
 
  {
    path: "/",
    name: "Login",
    hidden:true,
    meta:{
      title:"登录"
    },
    component: Login,
  },
  //注册
  {
    path: "/register",
    name: "Register",
    hidden:true,
    meta:{
      title:"注册"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register,
  },
  //忘记密码
  {
    path: "/forget",
    name: "Forget",
    hidden:true,
    meta:{
      title:"忘记密码"
    },
    component: Forget,
  },
  //首页
  {
    path:"/index",
    name:'Index',
    meta:{
      title:"首页"
    },
    component: ()=>import('../views/layout/Index.vue')
  },
  //信息管理
  {
    path:"/adminIndex",
    name:"AdminIndex",
    meta:{
      title:'管理总台'
    },
    component: ()=>import('../views/layout/Index.vue'),
        children:[
          {
            path:"/role",
            name:"Role",
            meta:{
              title:"角色管理"
            },
            component: ()=>import("../views/admin/Role.vue")
          },
          {
            path:"/user",
            name:"User",
            meta:{
              title:"用户管理"
            },
            component: ()=>import("../views/admin/User.vue")
          },
        ]
  },
  {
    path:"/news",
    name:"News",
    component:()=>import("../views/News.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
