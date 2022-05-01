/**
 * Vue imports
 */
import { createStore } from 'vuex';

/**
 * Store modules imports
 */
import characterCreator from '@/store/modules/charactercreator/index.js';

/**
 * Create store
 */
const store = createStore({
    modules: { 
        'characterCreator': characterCreator
    }
});


/**
 * Export store
 */
export default store;