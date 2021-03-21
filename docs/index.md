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

### Método `getDamage`

### Método `start`

# Conclusiones


# Bibliografía

- [Guión de la práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/)
- [Guión de la práctica 3](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/)
- [Apuntes: Objetos, clases e interfaces](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-objects-classes-interfaces.html)
- [Pokedex Database](https://pokemondb.net/pokedex/all)
- [Pokemon Type Chart](https://pokemondb.net/type)
- [Arrays multidimensionales](https://www.tutorialspoint.com/typescript/typescript_multi_dimensional_arrays.htm)
- [Essential TypeScript: From Beginner to Pro](https://www.oreilly.com/library/view/essential-typescript-from/9781484249796/html/Part_1.xhtml)
