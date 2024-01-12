

/**
 * applyToSquare(function squarePerimeter(side) {
    return side * 4;
  });

applyToSquare(7); //=> should return 28... horrible**/

/**Esto obviamente no tiene sentido, debería 
ser del siguiente modo**/

const applyToSquare = (function squarePerimeter(side) {
    return side * 4;
});

console.log(applyToSquare(7)); //=> should return 28... horrible

const square = num => num*num;

console.log(square(3.7));