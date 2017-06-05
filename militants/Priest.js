"use strict";
const Warrior = require("./Warrior");

class Priest extends Warrior{
	constructor(hp){
		super(hp);
		this._origHp = hp;
	}
		
	attack(otherWarrior){
		if(this.getHp() < this._origHp){
			this.setHp(this.getHp() + 1);
		}
		super.attack(otherWarrior);
	}
}

module.exports = Priest;