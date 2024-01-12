/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
    /**
     * Creates a new service
     * @param {ExternalApi} api the original api
     */
    constructor(api) {
      this.api = api;
    }
  
    /**
     * Attempts to retrieve the translation for the given text.
     *
     * - Returns whichever translation can be retrieved, regardless the quality
     * - Forwards any error from the translation api
     *
     * @param {string} text
     * @returns {Promise<string>}
     */
    free(text) {
      return this.api.fetch(text).then((result) => result.translation);
    }
  
    /**
     * Batch translates the given texts using the free service.
     *
     * - Resolves all the translations (in the same order), if they all succeed
     * - Rejects with the first error that is encountered
     * - Rejects with a BatchIsEmpty error if no texts are given
     *
     * @param {string[]} texts
     * @returns {Promise<string[]>}
     */
    batch(texts) {
      if(texts.length)
        return Promise.all(texts.map((text)=>this.api.fetch(text).then((result)=>result.translation)));
      return Promise.reject(new BatchIsEmpty());
    }
  
    /**aca lo que yo no estaba viendo es que en el 
     * ejercicio de mierda este cuando
     * api.request(txt, callback) falla... callback devuelve un
     * error, y no un undefined.
     * Por eso no lograba entender cómo resolver el ejercicio
     * de mierda... si hubiera tenido en cuenta que la función
     * callback al no devolver nada, me estaba diciendo que estaba
     * todo OK, y que cuando devolvía algo, me daba un error
     * que era el mensaje de ese error, probablemente lo hubiera
     * podido sacar... el enunciado era demasiado largo y no 
     * tuve en cuenta que la mayor dificultad del ejercicio
     * yacía en este hecho.
     * 
    */
    /**
     * Requests the service for some text to be translated.
     *
     * Note: the request service is flaky, and it may take up to three times for
     *       it to accept the request.
     *
     * @param {string} text
     * @returns {Promise<void>}
     */
    request(text) {
      const apiRequest = (txt) => {

        return new Promise((resolve, reject)=>{
          this.api.request(txt, (err) => err ? reject(err) : resolve(undefined));
        });
      }
      return apiRequest(text)
        .catch(() => apiRequest(text))
        .catch(() => apiRequest(text));
    }
    
    /**
     * En este ejercicio no me avivé de que 
     * la clave de este ejercicio estaba en el momento
     * en que el fetch fallaba...
     * entonces nos interesaba el catch, y no el then
     * luego usaba la función request del punto anterior
     * y en el caso piola, el del then, hacía fetch...
     * lo lindo del ejercicio éste es que el catch vuelve a hacer
     * el fetch... que no debería fallar...
     * ya que previamente usamos la función premium request
     * que lo agregó al api_storage
     * 
     * por ultimo ya sea que entró por el lado del catch,
     * o haya pasado de largo el catch y recién ahí haya ido por el lado
     * del then, es entonces cuando chequea la calidad de la 
     * traducción, y si no cumple con la calidad mínima lanza el error,
     * caso contrario devuelve la traducción.
     * 
     * Lo ultimo que había que entender es que por el lado del this.request(text)
     * al probar 3 veces y fallar devuelve el error directamente
     * no hace falta que eso lo implemente la función premium
     * osea this.request(text) va por el lado del then...
     * pero por el lado del catch no hace nada, porque la misma función
     * si tiene que ir por el lado del catch lanza el error, no hace
     * falta decirle nada...
     * nuevamente, el enunciado era extremadamente complejo y había que leerlo
     * con mucho detenimiento, no era un problema conceptual de los promises
     * lo que no estaba entendiendo, sino que estaba subestimando la complejidad del ejercicio
     * por otro lado, el readme no me decía nada del promise.all...
     * tampoco de promise.reject... todo eso lo tenía que averiguar por mi cuenta
     * y a diferencia de lo que pasaba en la utn, donde tenías que usar
     * las herramientas que ellos te daban o nada, aca si tenes que averiguar
     * un poco más tenes que hacerlo, porque es como en la  vida misma
     * 
     *       
     *        */
    /**
     * Retrieves the translation for the given text
     *
     * - Rejects with an error if the quality can not be met
     * - Requests a translation if the translation is not available, then retries
     *
     * @param {string} text
     * @param {number} minimumQuality
     * @returns {Promise<string>}
     */
    premium(text, minimumQuality) {
      return this.api.fetch(text)
        .catch(()=>
          this.request(text).then(()=>this.api.fetch(text))
        )
        .then((response)=>{
          if(response.quality < minimumQuality)
            throw new QualityThresholdNotMet(text);
          return response.translation;
        })

    }

  
  /**
   * This error is used to indicate a translation was found, but its quality does
   * not meet a certain threshold. Do not change the name of this error.
   */
  export class QualityThresholdNotMet extends Error {
    /**
     * @param {string} text
     */
    constructor(text) {
      super(
        `
  The translation of ${text} does not meet the requested quality threshold.
      `.trim(),
      );
  
      this.text = text;
    }
  }
  
  /**
   * This error is used to indicate the batch service was called without any
   * texts to translate (it was empty). Do not change the name of this error.
   */
  export class BatchIsEmpty extends Error {
    constructor() {
      super(
        `
  Requested a batch translation, but there are no texts in the batch.
      `.trim(),
      );
    }
  }
  