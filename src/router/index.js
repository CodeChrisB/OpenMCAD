import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [

  {
    path: '/statistics',
    name: 'statistics',
    component: null,
  },

  {path:'',redirect:'/app'} //redirect to Warehouse whenever the url is not recognised
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
