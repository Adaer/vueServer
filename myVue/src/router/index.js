import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'

import ShowPage from '@/components/showpage'
import ShowPageA from '@/components/showpages/showpage_a'
import ShowPageB from '@/components/showpages/showpage_b'
import ShowPageC from '@/components/showpages/showpage_c'
import ShowPageD from '@/components/showpages/showpage_d'
import ShowPageE from '@/components/showpages/showpage_e'
import ShowPageF from '@/components/showpages/showpage_f'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
    	path: "/show",
    	name: "ShowPage",
    	component: ShowPage,
    	children:[
    		{
    			path:"/show/a",
    			component: ShowPageA
    		},{
    			path:"/show/b",
    			component: ShowPageB
    		},{
    			path:"/show/c",
    			component: ShowPageC
    		},{
    			path:"/show/d",
    			component: ShowPageD
    		},{
    			path:"/show/e",
    			component: ShowPageE
    		},{
    			path:"/show/f",
    			component: ShowPageF
    		}
    	]
    }
  ]
})
