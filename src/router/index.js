import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Index from '../views/index.vue'
import Notes from '../views/notes/list.vue'
import NoteDetail from '../views/notes/details.vue'

import Tools from '../views/tools/list.vue'
import Wallpaper from '../views/wallpaper/list.vue'
import Friends from '../views/friends/list.vue'
import FriendDetail from '../views/friends/details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: {name: "Index"}
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/NoteDetail/:blogId',
    name: 'NoteDetail',
    component: NoteDetail
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/wallpaper',
    name: 'Wallpaper',
    component: Wallpaper
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/FriendDetail',
    name: 'FriendDetail',
    component: FriendDetail
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
