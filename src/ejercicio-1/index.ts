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
let Blaziken = new Pokemon("Blaziken", 52.0, 1.9, types.fire, 120, 70, 80, 80);
let Ampharos = new Pokemon("Ampharos", 61.5, 1.4, types.electric, 75, 85, 55, 90);
let Oshawott = new Pokemon("Oshawott", 5.9, 0.5, types.water, 55, 45, 45, 55);
let Golem = new Pokemon("Golem", 300.0, 1.4, types.rock, 120, 130, 45, 80);

Pokedex.push(Hydreigon);
Pokedex.push(Cosmog);
Pokedex.push(Blaziken);
Pokedex.push(Ampharos);
Pokedex.push(Oshawott);
Pokedex.push(Golem);

let combat = new Combat(Pokedex[0], Pokedex[1]);

combat.start();


