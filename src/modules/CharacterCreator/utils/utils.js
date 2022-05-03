/**
 * Return gender string based in 'f' or 'm'.
 * @param {String} symbol 
 */
export const getGenderString = (symbol) => ({
    'f': 'Mujer',
    'm': 'Hombre',
    'default': '?'
})[symbol || 'default'];