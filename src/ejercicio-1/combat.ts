console.log("Holaa soy el sistema de combate")

import {Pokemon} from "./pokemon"

export class Combat {

  constructor (private pokemon_A: Pokemon, private pokemon_B: Pokemon){
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
  
  start() {

    let effect_A: number = this.typeChart(this.pokemon_A.getType(), this.pokemon_B.getType())
    let effect_B: number = this.typeChart(this.pokemon_B.getType(), this.pokemon_A.getType())

    let HP_A: number = this.pokemon_A.getHP();
    let HP_B: number = this.pokemon_B.getHP();

    let damage: number;

    
    if (this.pokemon_A.getSpeed() > this.pokemon_B.getSpeed()) {

      console.log(`${this.pokemon_A.getName()} atacará primero!`);
      console.log("--------------------------------------------------------------------------------------------");

      let damage: number;
      
      while (HP_A > 0 && HP_B > 0) {

        damage = this.getDamage(this.pokemon_A.getAttack(), this.pokemon_B.getDefense(), effect_A);
        HP_B = HP_B - damage;

        console.log(`${this.pokemon_A.getName()} ataca a ${this.pokemon_B.getName()} con ${damage}p de daño!`);
        console.log(`${this.pokemon_B.getName()} ahora tiene ${HP_B} de vida`);
        console.log("--------------------------------------------------------------------------------------------");

        damage = this.getDamage(this.pokemon_B.getAttack(), this.pokemon_A.getDefense(), effect_A);
        HP_A = HP_A - damage;

        console.log(`${this.pokemon_B.getName()} ataca a ${this.pokemon_A.getName()} con ${damage}p de daño!`);
        console.log(`${this.pokemon_A.getName()} ahora tiene ${HP_A} de vida`);
        console.log("--------------------------------------------------------------------------------------------");
        

      }
    }

    if (this.pokemon_B.getSpeed() > this.pokemon_A.getSpeed()) {

      console.log(`${this.pokemon_B.getName()} atacará primero!`);
      
      let damage: number;
      
      while (HP_A > 0 && HP_B > 0) { 

        damage = this.getDamage(this.pokemon_B.getAttack(), this.pokemon_A.getDefense(), effect_A);
        HP_A = HP_A - damage;

        console.log(`${this.pokemon_B.getName()} ataca a ${this.pokemon_A.getName()} con ${damage}p de daño!`);
        console.log(`${this.pokemon_A.getName()} ahora tiene ${HP_A} de vida`);
        console.log("--------------------------------------------------------------------------------------------");

        damage = this.getDamage(this.pokemon_A.getAttack(), this.pokemon_B.getDefense(), effect_A);
        HP_B = HP_B - damage;

        console.log(`${this.pokemon_A.getName()} ataca a ${this.pokemon_B.getName()} con ${damage}p de daño!`);
        console.log(`${this.pokemon_B.getName()} ahora tiene ${HP_B} de vida`);
        console.log("--------------------------------------------------------------------------------------------");
      }
    }
  }
}