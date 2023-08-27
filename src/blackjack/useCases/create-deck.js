import _ from 'underscore';



/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposCartas  Ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} esta función retorna un deck de cartas 
 */
export const crearDeck = ( tiposCartas, tiposEspeciales ) => {

  if ( !tiposCartas || tiposCartas.length === 0 )  throw new Error('Tipos de carta es obligatorio como un array de string ');

  let deck = [];
  for( let i = 2; i <= 10; i++ ) {
    for( let tipo of tiposCartas ) {
      deck.push( i + tipo);
    }
  }

  for( let tipo of tiposCartas ) {
    for( let esp of tiposEspeciales ) {
      deck.push( esp + tipo);
    }
  }
  return _.shuffle( deck );
};
