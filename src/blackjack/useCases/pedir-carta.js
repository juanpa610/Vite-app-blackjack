/**
 * Cuando el usuario pide una carta se tiene que eliminar de la baraja
 * @param {Array<String>} deck Baraja de cartas 
 * @returns {String} Se retorna ultima carta eliminada de la baraja
 */
export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0 ) {
        throw new Error( 'No hay cartas en el deck');
    }
    return deck.pop();
}