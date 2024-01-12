//Elyses Looping Enchantments
// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let counter=0;
  stack.forEach((c)=>{if(c===card) counter++});
  return counter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
//true = even, false = odd
export function determineOddEvenCards(stack, type) {
  let evenCounter = 0 ;
  let oddCounter = 0;
  for (let card of stack){
    if(card % 2 === 0 && type){
      evenCounter++;
    } else if (!(card %2 === 0 && type)) {
      oddCounter++ ;
    }
  }
  if(type)
    return evenCounter;
  return oddCounter;
}
