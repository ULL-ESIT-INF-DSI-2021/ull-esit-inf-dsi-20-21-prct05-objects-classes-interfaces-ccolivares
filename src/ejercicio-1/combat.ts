console.log("Holaa soy el sistema de combate")

import {Pokemon} from "./pokemon"

export class Combat {
  private pokemon_A: Pokemon;
  private pokemon_B: Pokemon;
  private role: string;

  constructor (pokemon_A: Pokemon, pokemon_B: Pokemon){
    this.pokemon_A = pokemon_A;
    this.pokemon_B = pokemon_B;
  }

  typeChart(typeA: number, typeB: number): number {
    /*
    No effect = 0
    Not very effective = 1
    Normal = 2
    Super-effective = 3
    */

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

    return damage;
  }
  
  start(pokemon_A: Pokemon, pokemon_B: Pokemon) {

    let effect_A: number = this.typeChart(pokemon_A.getType(), pokemon_B.getType())
    let effect_B: number = this.typeChart(pokemon_B.getType(), pokemon_A.getType())

    let HP_A: number = pokemon_A.getHP();
    let HP_B: number = pokemon_B.getHP();

    let damage: number;

    
    if (pokemon_A.getSpeed() > pokemon_B.getSpeed()) {

      let damage: number;
      
      while (HP_A > 0 && HP_B > 0) { 
        HP_B = HP_B - this.getDamage(pokemon_A.getAttack(), pokemon_B.getDefense(), effect_A);
        HP_A = HP_A - this.getDamage(pokemon_B.getAttack(), pokemon_A.getDefense(), effect_B);
      }
    }

    if (pokemon_B.getSpeed() > pokemon_A.getSpeed()) {
      
      let damage: number;
      
      while (HP_A > 0 && HP_B > 0) { 
        HP_A = HP_A - this.getDamage(pokemon_B.getAttack(), pokemon_A.getDefense(), effect_B);
        HP_B = HP_B - this.getDamage(pokemon_A.getAttack(), pokemon_B.getDefense(), effect_A);
      }
    }
  }
}