# Introducción

En esta práctica nos familiarizaremos con los objetos, clases e interfaces del lenguaje Typescript, apoyándonos en una serie de ejercicios de programación. 

# Objetivos

## Objetivo del ejercicio 1

Este ejercicio consistirá en la mejora del anterior ejercicio nº9 de la [práctica 3](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/) que realizaba los cálculos de daño necesarios para realizar un combate _Pokémon_. 

En esta ocasion crearemos dos clases `pokemon` que almacenará los datos generales de cada _Pokémon_ y `combat` que realizará las acciones de combate. Los _Pokémon_ se almacenarán en una _Pokédex_ que consistirá en un vector de objetos de tipo _Pokémon_.

Se tomarán en cuenta para el combate estadísticas como el ataque y la defensa para el cálculo de daño base, la efectividad para el cálculo de debilidades y fortalezas entre los tipos _Pokémon_ y la velocidad para decidir el primer atacante. El combate finalizará cuando la vida alguno de los dos competidores baje de 0. 

# Desarrollo de la práctica

## Ejercicio 1

Para comenzar la descripción de la estructura de nuestro ejercicio hablaremos de las clases `pokemon` y `combat`.

Nuestra clase `pokemon` crea objetos con los atributos correspondientes al perfil de nuestro _Pokémon_, los cuales seraán los siguientes: 

- Nombre del _Pokémon_ _(name)_
- Peso _(weight)_
- Altura _(height)_
- Tipo _(type)_
  - Normal _(normal)_
  - Fuego _(fire)_
  - Agua _(water)_
  - Eléctrico _(electric)_
  - Planta _(grass)_
  - Hielo _(ice)_
  - Lucha _(fighting)_
  - Veneno _(poison)_
  - Tierra _(ground)_
  - Volador _(flying)_
  - Psíquico _(psychic)_
  - Bicho _(bug)_
  - Roca _(rock)_
  - Fantasma _(ghost)_
  - Dragón _(dragon)_
  - Siniestro _(dark)_
  - Acero _(steel)_
  - Hada _(fairy)_
- Ataque _(attack)_
- Defensa _(defense)_
- Velocidad _(speed)_
- Vida _(HP)_

En nuestro caso los atributos de la clase _Pokémon_ que hemos mencionado están declarados como atributos privados, por lo tanto debemos implementar dentro de nuestra clase una serie de _"getters"_ para poder acceder a todos los atributos.

Podemos apreciar la implementación de lo explicado en las siguientes líneas: 
```typescript
export class Pokemon {

  constructor(private name: string, private weight: number, private height: number, 
              private type: number, private attack: number, private defense: number, 
              private speed: number, private HP: number){
  }

  getName() {
    return this.name;
  }

  getWeight() {
    return this.weight;
  }
  
  getHeight() {
    return this.height;
  }
  
  getType() {
    return this.type;
  }

  getAttack() {
    return this.attack;
  }

  getDefense() {
    return this.defense;
  }

  getSpeed() {
    return this.speed;
  }

  getHP() {
    return this.HP;
  }
}
```


Continuaremos hablando de la clase `combat` que recibirá a los participantes del combate y se encargará de toda la ejecución del combate en su totalidad. Para hablar de ella separaremos sus métodos:

### Método `typeChart`

Este método ha sido diseñado con el objetivo de poder realizar la comparación de los 18 tipos de _Pokémon_ de una manera sencilla. Hemos utilizado un array multidimensional que hemos rellenado de la siguiente forma:


Efecto | Valor | Multiplicador
------------ | ------------- | -------------
No muy efectivo | 1 | x0.5
Neutral | 2 | x1.0
Muy efectivo | 3 | x2.0

Basandonos en la siguiente tabla de tipos: 
![Type Chart](../../img/typechart.png)

Resulta el siguiente código: 
```typescript
typeChart(typeA: number, typeB: number): number {

  let type_chart: number[][] = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2],
    [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 3, 1, 2, 1, 2, 3, 2],
    [2, 3, 1, 2, 1, 2, 2, 2, 3, 2, 2, 2, 3, 2, 1, 2, 2, 2],
    [2, 2, 3, 1, 1, 2, 2, 2, 1, 3, 2, 2, 2, 2, 1, 2, 2, 2],
    [2, 1, 3, 2, 1, 2, 2, 1, 3, 1, 2, 1, 3, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 3, 1, 2, 2, 3, 3, 2, 2, 2, 2, 3, 2, 1, 2],
    [3, 2, 2, 2, 2, 3, 2, 1, 2, 1, 1, 1, 3, 1, 2, 3, 3, 1],
    [2, 2, 2, 2, 3, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 1, 3],
    [2, 3, 2, 3, 1, 2, 2, 3, 2, 1, 2, 1, 3, 2, 2, 2, 3, 2],
    [2, 2, 2, 1, 3, 2, 3, 2, 2, 2, 2, 3, 1, 2, 2, 2, 1, 2],
    [2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2],
    [2, 1, 2, 2, 3, 2, 1, 1, 2, 1, 3, 2, 2, 1, 2, 3, 1, 1],
    [2, 3, 2, 2, 2, 3, 1, 2, 1, 3, 2, 3, 2, 2, 2, 2, 1, 2],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 1],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 1],
    [2, 1, 1, 1, 2, 3, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 3, 3, 1, 2]
  ];
  
  return type_chart[typeA][typeB];
  }
```

Nuestra función `typeChart` recibe los tipos de cada pokemon que estan asignados cada uno a un número distinto según la siguiente lista enumerada:

```typescript
enum types {normal, fire, water, electric, grass, ice, fighting, poison, ground, flying,
            psychic, bug, rock, ghost, dragon, dark, steel, fairy}
  
```

Por lo tanto simplemente devolviendo el valor que encuentra nuestro vector al proporcionarle el número correspondiente al tipo del atacante (columnas) y el correspondiente al tipo del defensor (filas) encontrará el efecto que hace ese ataque en forma de valor numérico siguiendo la tabla indicada anteriormente. Más adelante este valor se interpretará para unirlo a la fórmula de daño. 

### Método `getDamage`

Este método se encargará de hacer los cálculos de daño de cada ataque ya conociendo la efectividad del mismo. Recibirá por lo tanto el valor del ataque del _Pokémon_ atacante y el valor de la defensa del _Pokémon_ defensor, además de la efectividad de ese ataque en concreto. 

En primer lugar filtraremos e interpretaremos la efectividad, según el valor que tenga aplicaremos un multiplicador u otro (basandonos en la tabla anteriormente mencionada). Seguiremos la siguiente fórmula:

```typescript
daño = 50 * (ataque / defensa) * eficiencia
```

Por lo tanto nuestro código se vería de la siguiente manera: 
```typescript
getDamage(attack: number, defense: number, effect:number): number {

    let damage: number = 0; 

    if (effect == 1) {
      damage = 50 * (attack / defense) * 0.5;
    }

    if (effect == 2) {
      damage = 50 * (attack / defense) * 1;
    }

    if (effect == 3) {
      damage = 50 * (attack / defense) * 2;
    }
    return Math.round(damage);
  }
```
El uso del método `Math.round()` nos sirve para devolver el valor redondeado sin comas decimales.

### Método `start`

Este método es el más importante de nuestra clase `combat` ya que es el que realiza la acción del combate en si. 

Comenzaremos obteniendo el valor de la efectividad de los competidores actuales cumpliendo cada uno de ellos el rol de atacante y defensor, por lo tanto crearemos dos variables `effect_A` (en el caso en el que el pokemon_A sea el atacante) y `effect_B` (en el caso en el que el pokemon_B sea el atacante):

```typescript
let effect_A: number = this.typeChart(this.pokemon_A.getType(), this.pokemon_B.getType());
let effect_B: number = this.typeChart(this.pokemon_B.getType(), this.pokemon_A.getType());    
```
Para esto llamamos a la función `typeChart` para que nos halle la efectividad en cada uno de los casos.

Luego almacenaremos en variables auxiliares `HP_A` y `HP_B` que contendrán inicialmente los puntos de vida de cada uno de los _Pokémon_. No podemos modificar un atributo de otra clase sin un método `set` y además optaremos por no cambiar el valor del atributo directamente ya que no es lo adecuado. 
```typescript
let HP_A: number = this.pokemon_A.getHP();
let HP_B: number = this.pokemon_B.getHP();
```

Nuestro programa se dividirá en dos grandes condicionales que se regirán por la velocidad de los competidores (como se realiza normalmente en el juego original) el que tenga más puntos de velocidad atacará primero. Ambos condicionales contendrán las mismas secuencias en distintos ordenes. 

Nuestro ataque se realizará dentro de un bucle `while`, que parará su ejecución en el momento en el que alguna de las vidas sea menor o igual a cero. En este bucle se realizarán siempre dos turnos, el primero en atacar siempre sera el que haya superado en puntos de velocidad al otro. 

En estos turnos se calculará el daño llamando a la función `getDamage` de `combat` y ofreciendole los elementos antes mencionados (valor del ataque, valor de la defensa y efectividad) y luego se restará a la vida del defensor los puntos de daño obtenidos en el cálculo del método invocado. 

Añadiremos además un pequeño condicional que detenga el bucle en caso de que alguno de los competiciones pierda sus puntos de vida en el primer turno de los dos que se realizan en nuestro bucle `while`.


Contemplaremos en primer lugar el caso en el que el pokemon_A ataca primero: 
```typescript
let damage: number;
    
while (HP_A > 0 && HP_B > 0) { 
  damage = this.getDamage(this.pokemon_B.getAttack(), this.pokemon_A.getDefense(), effect_A);
  HP_A = HP_A - damage;

  if (HP_A <= 0) {
    break;
  }
  
  damage = this.getDamage(this.pokemon_A.getAttack(), this.pokemon_B.getDefense(), effect_A);
  HP_B = HP_B - damage;
}
```

Podemos ver también como se vería el código en el caso de ser el pokemon_B nuestro primer atacante: 
```typescript
let damage: number;
      
while (HP_A > 0 && HP_B > 0) { 
  damage = this.getDamage(this.pokemon_B.getAttack(), this.pokemon_A.getDefense(), effect_A);
  HP_A = HP_A - damage;
  
  if (HP_A <= 0) {
    break;
  }
  
  damage = this.getDamage(this.pokemon_A.getAttack(), this.pokemon_B.getDefense(), effect_A);
  HP_B = HP_B - damage;
}
```

Por último para proporcionarle los datos de nuestros _Pokémon_ creamos un fichero aparte index.ts para realizar las inicializaciones y llamadas necesarias.

Observamos en el siguiente código como hemos implementado los datos de varios _Pokémon_, siguiendo la estructura de nuestro constructor de la clase `pokemon` creamos distintos objetos `pokemon` que almacenaremos luego en un vector `Pokedex`, utilizaremos las posiciones de los `pokemon` en nuestro vector para proporcionarselos a la clase `combat` por sus argumentos siguiento obviamente la estructura de su propio constructor. 

Para comenzar el combate llamaremos a la función `start` y se realizará sin problemas.

```typescript
import { Pokemon } from "./pokemon";
import { Combat } from "./combat"

let Pokedex: Pokemon[] = [];

enum types {normal, fire, water, electric, grass, ice, fighting, poison, ground, flying,
            psychic, bug, rock, ghost, dragon, dark, steel, fairy}
  
/*
Peso = kilogramos
Altura = metros
*/

let Hydreigon = new Pokemon("Hydreigon", 160.0, 1.8, types.dragon, 105, 90, 98, 920);
let Cosmog = new Pokemon("Cosmog", 0.1, 0.2, types.psychic, 29, 31, 37, 430);
let Blaziken = new Pokemon("Blaziken", 52.0, 1.9, types.fire, 120, 70, 80, 800);
let Ampharos = new Pokemon("Ampharos", 61.5, 1.4, types.electric, 75, 85, 55, 900);
let Oshawott = new Pokemon("Oshawott", 5.9, 0.5, types.water, 55, 45, 45, 550);
let Golem = new Pokemon("Golem", 300.0, 1.4, types.rock, 120, 130, 45, 800);

Pokedex.push(Hydreigon);
Pokedex.push(Cosmog);
Pokedex.push(Blaziken);
Pokedex.push(Ampharos);
Pokedex.push(Oshawott);
Pokedex.push(Golem);

let combat = new Combat(Pokedex[4], Pokedex[2]);

combat.start();
```

Comprobaremos el funcionamiento de nuestro programa y podemos observar como se realizan los combates: 



# Conclusiones


# Bibliografía

- [Guión de la práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/)
- [Guión de la práctica 3](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/)
- [Apuntes: Objetos, clases e interfaces](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-objects-classes-interfaces.html)
- [Pokedex Database](https://pokemondb.net/pokedex/all)
- [Pokemon Type Chart](https://pokemondb.net/type)
- [Arrays multidimensionales](https://www.tutorialspoint.com/typescript/typescript_multi_dimensional_arrays.htm)
- [Essential TypeScript: From Beginner to Pro](https://www.oreilly.com/library/view/essential-typescript-from/9781484249796/html/Part_1.xhtml)
