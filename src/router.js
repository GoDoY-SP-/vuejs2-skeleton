import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// Carregar view dinamicamente
function loadView(view) {
    // route level code-splitting
    // this generates a separate chunk (view-${view}.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: loadView('Home'),
        },
        {
            path: '/about',
            name: 'about',
            component: loadView('About')
        }
    ]
})
