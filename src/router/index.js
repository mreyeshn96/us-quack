/**
 * Third-party dependencies
 */

import { createRouter, createWebHashHistory } from 'vue-router';

/**
 * Components route
*/
import characterCreatorRouter from '@/modules/CharacterCreator/router/index.js';

/**
 * Routes
 */
const routes = [
    {
        path: '/',
        component: () =>  import( /* webpackChunkName: "App" */ '@/App.vue')
    },
    {
        path: '/character-creator',
        ...characterCreatorRouter
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