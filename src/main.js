import Vue from 'vue'
import App from './App.vue'
import Home from './home.vue'
import User from './user.vue'
import Allnames from './allnames.vue'
import vuerouter from 'vue-router'
import SinglePost from './singlepost.vue'

Vue.use(vuerouter);

const routes = [
    { path: '/posts', component: Home },
    { path: '/user', component: User},
    { path: '/allnames', component: Allnames},
    { path: '/posts/post/:id', component: SinglePost }
]

const router = new vuerouter({
    routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
