triangulo de pascal.js

para este ejercicio, sabemos que vamos a recibir por parámetro la cantidad de filas que vamos a devolver del triángulo, si nos piden una sola fila (rows(0)), entonces vamos a devolver [], si nos piden una fila se devuelve [[1]], si nos piden dos filas, vamos a devolver [[1],[1,1]], y así sucesivamente, por ende vamos a necesitar una función que devuelva un vector basándose en otro vector que está recibiendo yta que este le va a permitir formar la fila que se está pidiendo

si nos dicen rows(0), llamamos a la función que nos va a devolver el [] con la lista vacía
si nos dicen rows(2), vamos a llamar a la función la primera vez con la lista vacía, luego de manera recursiva con el [1], hasta que el argumetno que estaba dentro de rows, en este caso el 2, queda en 0

la manera en la cual se determina el valor de cada una de las celdas del triángulo es
basándose en las posiciones de la fila que la función recibe por parámetro, por ejemplo la posición 0 de la fila generada, es la suma de la posición 0 de la fila recibida por parámetro
la posición 1 de la fila generasda, es a partir de sumawr la posición 0 y la 1, de la lista recibida por parámetro, y así sucesivamente hasta que se llega al elemento n+1 (la función recibe como argumento una función de n elementos).


Lo importante en este y en todos  los ejercicios es encontrar la relación entre las partes, mientras que no entiendas como se relacionan las partes entre sí, no vas as poder dar con la verdadera resolución y te vas a estar frustrando intentando programar algo que no tiene sentido... no se trata de pensar demasiado las cosas, sino de ver cómo se relacionan las partes enter sí para lograr encontrar la solución...

por ejemplo, en este ejercicio la mecánica ya entendimos que se basa en devolver 
rows(0)=[]-> lista vacía
rows(1)=[[1]] -> lista con un solo elemento entre corchetes
rows(2)=[[1],[1]]-> como sin primer y ultimo elemento de la lista, valen [1]
rows(3)=[[1],[2],[1]] -> el priemr y el ultimo sabemos que valen 1, el del medio vale la suma de los elementos i-1 e i de la columna anterior
rows(4)=[[1],[3],[3],[1]]
....


