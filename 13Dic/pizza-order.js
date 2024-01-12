
/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
    let cost=0;
    switch(pizza){
        case 'Margherita':
            cost=7;
            break;
        case 'Caprese':
            cost=9;
            break;
        case 'Formaggio':
            cost=10;
            break;
    }
    let extraCost = 0;
    const addExtraValues = (extras) => {
        const [extra, ...rest] = extras;
        if(extra==='ExtraToppings')
            extraCost = 2;
        else if (extra==='ExtraSauce')
            extraCost = 1;
        if(extras.length===1)
            return extraCost;
        else
            return extraCost + addExtraValues(rest);
    }
    if(extras.length>0){
        cost+=addExtraValues(extras);
    }
    return cost;
}
  
  /**
   * Calculate the prize of the total order, given individual orders
   *
   * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
   * @returns {number} the price of the total order
   */
  export function orderPrice(pizzaOrders) {
    /*el tema acá estaba en darse cuenta de que PizzaOrders.extras 
        era una lista de strings en su clase, 
        pero nosotros a pizzaPrice le teníamos que pasar 
        strings, separados por coma... lo cual logramos con 
    
    */
    return pizzaOrders.reduce((acumulador, orden)=>
    acumulador+pizzaPrice(orden.pizza, ...orden.extras)
, 0);
}
  