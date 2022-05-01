import state from './state.js';
import * as mutations from './mutations.js';

/**
 * Creating store object
 */
const charactercreator = {
    namespaced: true,

    state: state,
    mutations: mutations
}

/**
 * Exporting the store
 */

export default charactercreator