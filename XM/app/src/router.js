import Vue from 'vue'
import Router from 'vue-router'
import no1 from './main/no1.vue'
import no2 from './main/no2.vue'
import n1 from './main/n1.vue'
import n2 from './main/n2.vue'
import n3 from './main/n3.vue'
import n4 from './main/n4.vue'
import n5 from './main/n5.vue'
import n6 from './main/n6.vue'
import n7 from './main/n7.vue'



Vue.use(Router)

var routes=[
  {
    path:'/',
    name:'no1',
    component:no1,
    children:[
      {
      path:'/',
      name:'n1',
      component:n1,
      },{
      path:'/cen2',
      name:'n2',
      component:n2,
      },{
      path:'/cen3',
      name:'n3',
      component:n3,
      },{
      path:'/cen4',
      name:'n4',
      component:n4,
      },{
      path:'/cen5',
      name:'n5',
      component:n5,
      },{
      path:'/cen6',
      name:'n6',
      component:n6,
      },{
      path:'/cen7',
      name:'n7',
      component:n7,
      }
    ]
  },
  {
      path:'/no2',
      name:'no2',
      component:no2,
  }
]

export default new Router({
  routes
})
