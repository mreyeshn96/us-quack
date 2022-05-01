/**
 * Vue imports
 */

import { createApp } from 'vue'
import App from './App.vue'

/**
 * Importing router
 */
import router from '@/router/index.js';

/**
 * CSS Imports
 */
import '/src/assets/css/tailwind.css';




/**
 * Create Vue App
 */
createApp(App)
    .use(router)
    .mount('#app')
