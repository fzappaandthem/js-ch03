//testArrFunctions.js

const deck = [1, 2, 3, 4, 10];
console.log(deck.slice());



console.log(deck.reduce((accumulator, elem)=>{
    if(elem===3)
        accumulator.push(...dosTres);
    accumulator.push(elem);
    accumulator.push(fruta);
    return accumulator;
}, [],dosTres=[3, 3], fruta='fruta'));

const deckSan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sandwichTrick(deck) {
    const first = deck.shift();
    const last = deck.pop();
    deck.splice(deck.length/2, 0, last, first);
    return deck;
}

console.log(deck.shift());

console.log(sandwichTrick(deckSan));

function pizzaPrice(pizza, ...extras) {
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
        console.log(extras);
        /**
         * extras no se modifica por yo hacer el elipsis
         * [extra, ...rest], por eso la función tiene que 
         * llamarse a sí misma con un length === 1
         */
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


pizzaPrice('Formaggio', 'ExtraSauce', 'ExtraToppings');

function getShitAsItIs(shit){
    console.log(shit);
}

function getShitSeparated(...shitSep){
    console.log(shitSep);
}

getShitAsItIs(deckSan);
getShitSeparated(deckSan);



