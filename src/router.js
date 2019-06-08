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
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        // Rotas Gerais
        {
            path: "/",
            name: "bootstrap",
            component: loadView('AppMain'),
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    components: {
                        default: loadView('AppMain'),
                        'router-view-child': loadView('Home')
                    }
                },
                {
                    path: "/about",
                    name: "about",
                    components: {
                        default: loadView('AppMain'),
                        'router-view-child': loadView('About')
                    }
                },
            ]
        },
        // Rotas de Erros
        {
            path: "*",
            name: 'error',
            component: loadView('AppError'),
            redirect: '/404',
            children: [
                {
                    path: '/404',
                    name: 'errorNotFound',
                    components: {
                        default: loadView('AppError'),
                        'router-view-child': loadView('AppError404')
                    }
                }
            ]
        }

    ]
});