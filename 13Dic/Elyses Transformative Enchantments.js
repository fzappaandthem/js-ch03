//Elyses Transformative Enchantments.js
// @ts-check
//pure array functions, return new array, don't modify original
//Los que no son puros, modificar el array y no devuelven nad
// puras SMFR 
/**
 * MAP(pure): creates a new array by transforming each element according
 * to a function passed as an argument.
 * These callback functions are often written as arrow functions
 * 
 * FILTER(pure): creates an array by filtering the current one
 * given a filtering function (that returns true if the elemeent
 * should be kept, and false if it should be removed)
 * 
 * REDUCE(pure): reduces the array to a single value using a 
 * function that takes an accumulator, and the current element
 * of the array as parameters.
 * This function instructs how the current element must be merged
 * into the accumulator and returns the accumulator that will be 
 * used on the next iteration. The function also sets an initial
 * value for the accumulator.
 * 
 * REVERSE: modifica el array original. lo que el nombre sugiere
 * 
 * SLICE (pure): Dado un inicio, y un fin como índices, crea
 * un sub-array sobre el array pasado como parámetro.
 * No es incluido el indice del final. osea arr.slice(0,2)
 *  ... se leerían las cotas como [0,2) osea devolvería los
 * primeros dos elementos
 * 
 * SORT: por defecto, sort, ordena los elementos de un array 
 * al convertirlos inciialmente en strings, y luego aplicando
 * comparación de strings. El ordenamiento ocurre _in-place_
 * osea que se modifica el array original.
 * sort también devuelve el array modificado lo cual es conveniente
 * si se busca encadenarlo con otros métodos.
 * 
 * Para customizar el comportamiento del ordenamiento también se puede
 * pasar una función comparadora como argumento.
 * La función comparadora se llama con dos argumentos, que son
 * dos elementos del array que están siendo comparados.
 * Luego devuelve lo siguiente.
 * -un número negativo si el primer elemento debería ser ordenado
 * antes que el segundo.
 * -un número positivo si el primer argumento debería ser ordenado
 * luego del segundo
 * '0' si el orden se mantiene.
 * 
 * SPLICE: Quita o reemplaza y/o añade nuevos elementos al array
 * toma los siguientes parámetros:
 * -El índice del elemento a partir del cual se empieza a modificar
 * el array
 * -El número de elementos a eliminar.
 * -Los elementos a insertar en el array (opcional)
 *  ** devuelve los elementos que fueron eliminados
 * 
 */
/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
    return deck.map((card)=>card*2);
  }
  
  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
  export function threeOfEachThree(deck) {
    const dosTres=[3, 3];
    return deck.reduce((accumulator, card)=>{
        if(card===3){
            accumulator.push(...dosTres);
        }
        accumulator.push(card);
        return accumulator;
    }, [])
  }
  
  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
  export function middleTwo(deck) {
    deck.splice(0, 4);
    deck.splice(2, 4);
    return deck;
  }
  
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  
  function sandwichTrick(deck) {
    const first = deck.shift();
    const last = deck.pop();
    deck.splice(deck.length/2, 0, last, first);
    return deck;
}
  
  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
  export function twoIsSpecial(deck) {
    return deck.filter((card)=>card === 2);
  }
  
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
  export function perfectlyOrdered(deck) {
    deck.sort((card1, card2)=>{
      if(Number(card1)<Number(card2))
        return -1;
      if(Number(card2)<Number(card1))
        return 1;
      return 0;
    })
    return deck;
  }
  
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
  export function reorder(deck) {
    deck.reverse();
    return deck;
  }
  