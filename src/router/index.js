/**
 * Third-party dependencies
 */

import { createRouter, createWebHashHistory } from 'vue-router';

/**
 * Routes
 */
const routes = [
    {
        path: '/',
        component: () =>  import( /* webpackChunkName: "App" */ '@/App.vue')
    }
]


/**
 * Create router
 */
const router = createRouter({
    routes,
    history: createWebHashHistory()
});

/**
 * Exporting router as default
 */
export default router