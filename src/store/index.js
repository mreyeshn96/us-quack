/**
 * Vue imports
 */
import { createStore } from 'vuex';

/**
 * Store modules imports
 */
import characterCreator from '@/modules/CharacterCreator/store/index.js';

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