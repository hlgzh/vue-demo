import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Book from '../views/Book'
import BookManager from "../views/BookManager";
import Addbook from "../views/Addbook";
import BookUpdate from "../views/BookUpdate";
import PageFour from "../views/PageFour";
import App from "../App";
import Index from "../views/Index";
Vue.use(VueRouter)

  const routes = [
    {
    path: '/',
    name: "图书管理",
      redirect: 'BookManager',
    component:Index,
    children: [
        {
          path: '/BookManager',
          name: "查询图书",
          component: BookManager
        },
        {
          path: '/Addbook',
          name: "添加图书",
          component:Addbook
        }
      ]
    },
    {
      path: "/update",
      name: "修改图书",
      component:BookUpdate,
      show:false
    },
/*    {
      path: "/navigation",
      name: "导航二",
      component: Index,
      children: [
        {
          path: '/pageThree',
          name: "页面三",
          component: PageThree
        },
        {
          path: '/pageFour',
          name: "页面四",
          component: PageFour
        }
      ]
    }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
