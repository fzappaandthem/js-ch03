*
* @returns {function} a function which takes an x, y parameter, returns the
*  scaled coordinate pair in the form [x, y]
*/
 export function scale2d(sx, sy) {
   return (x, y) => {
       return [x*sx, y*sy];
   }
 }
/**
* Create a composition function that returns a function that combines two
* functions to perform a repeatable transformation
*
* @param {function} f the first function to apply
* @param {function} g the second function to apply
*
* @returns {function} a function which takes an x, y parameter, returns the
*  transformed coordinate pair in the form [x, y]
*/
 export function composeTransform(f, g) {
   return (x, y) => 
   {
       //f(x, y) array
     const [first, second] = f(x, y); 
     return g(first, second);
   }
 }
/* * Return a function that memoizes the last result.  If the arguments are the same as the last call,
* then memoized result returned.
*
* @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
*
* @returns {function} a function which takes x and y arguments, and will either return the saved result
*  if the arguments are the same on subsequent calls, or compute a new result if they are different.
*/

let lastArguments={};
let lastResult=[];
let lastFunction;

export function memoizeTransform(f) {
 return (x, y) => {
   if (f!==lastFunction || {x, y} !== lastArguments)
   {
     lastArguments = {x, y};
     lastResult=f(x, y);
     lastFunction=f;
   }
   return lastResult;
 }
}