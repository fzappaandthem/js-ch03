




/**
 * dice si la lasagna está lista o no
 * 
 * @param {number} segun el timer, cuantos minutos faltan para terminar la cocción
 * @return {string} si falta o no tiempo de cocción
 */

export function cookingStatus(timeLeft){
    if(timeLeft===0){
        return 'Lasagna is done.';
    } else if(timeLeft > 0){
        return 'Not done, please wait.';
    }
    return 'You forgot to set the timer.';
}

/**
 * Devuelve cuantos minutos hacen falta para terminar la lasagna
 * @param {string[]} capas de ingredientes
 * @param {number} promedio de tiempo de cocción por capa
 * @return {number} cuanto tardaría para esa cantidad de capas con ese tiempo promedio
 */

export function preparationTime(layers, avgTime=2){
    return layers.length*avgTime;
}

/**
 * Recibe una lista de capas y devuelñve las cantidades de fideos y de salsa que hacen falta pra cocniar esa lasagna
 * @param {string[]} an array of layers
 * @return {Record<string, number>} objeto que representa la cantidad de fideos y salsa que hacen falta para las capas recibidas
 */

export function quantities(layers){
    let noodlesQty=0;
    let sauceQty=0;

    layers.forEach(layer => {
        if(layer==='noodles')
            noodlesQty+=50;
        else if (layer==='sauce')
            sauceQty+=0.2;
    });
    
    return {
        noodles:noodlesQty,
        sauce:sauceQty,
    };
}

/**
 * Recibe la receta de un amigo (lista de capas) y la propia, agrega el ingrediente secreto de la lsita del amigo, la cual está al final, a la nuestra
 * @param {string[]}
 * @param {string[]}
 */

export function addSecretIngredient(recetaAmigo, recetaPropia){
    recetaPropia.push(recetaAmigo[recetaAmigo.length-1]);
}

/**
 * recibe un objeto con la cantidad de ingredientes necesarios para dos porciones, devuelve un listado de ingredientes necesarios para la cantidad de porciones pasadas en el arg2
 * @param {Record<string, number>[]}
 */

export function scaleRecipe(recetaOriginal, porcionesACocinar){
    const recetaFinal = {};
    const factor = porcionesACocinar/2;
    for (const key in recetaOriginal) {
        recetaFinal[key]=recetaOriginal[key]*factor;
    }
    return recetaFinal;
}


