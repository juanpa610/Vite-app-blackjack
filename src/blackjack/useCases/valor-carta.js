/**
 * El programa necesita saber el valor de la carta para calcular puntos del jugador 
 * @param {String} carta carta a la cual se evaluara su valor
 * @returns {Number}  se retorna el valor de la carta 
 */
export const valorCarta = ( carta ) => {
    if(!carta) throw new Error('Se esperaba una carta para calcular puntos');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}