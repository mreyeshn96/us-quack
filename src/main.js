/**
 * Vue imports
 */
import { createApp } from 'vue';
import App from './App.vue';

/**
 * Store import
 */
import store from '@/store/index.js';

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
    .use(store)
    .mount('#app')
