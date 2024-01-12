const deck = [5, 9, 7, 1, 8];


function discardTopCard(deck) {
    const [head, ...restOfDeck] = deck;
    return [head, restOfDeck];
}

console.log(discardTopCard(deck));

