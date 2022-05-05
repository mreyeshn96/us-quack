/**
 * Vue imports
 */
import { createApp } from 'vue';
import App from './App.vue';

/**
 * Store import
 */
import { createPinia } from 'pinia';

/**
 * Importing router
 */
import router from '@/router/index.js';

/**
 * CSS Imports
 */
import '/src/assets/css/tailwind.css';
import 'animate.css';

/**
 * Create Vue App
 */
createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
