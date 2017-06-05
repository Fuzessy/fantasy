"use strict";
class Warrior {
	
	constructor(hp){
		if(hp > 30){
			throw "HP 30 is the maximum!";
		}else if(hp < 0){
			throw "HP 0 is the minimum!";
		}
		this._hp = hp;
	}
	
	getHp(){
		return this._hp;
	}
	
	attack(otherWarrior){
		var damage = 1;
		if(this.getWeapon()){
			damage = this.getWeapon().getDamage();
		}
		if(otherWarrior.getWeapon()){
			damage = damage - otherWarrior.getWeapon().getProtection(); 
		}
		if(damage < 0){
			damage = 0;
		}
		
		otherWarrior.setHp(otherWarrior.getHp() - damage);
	}
	
	addWeapon(weapon){
		this._weapon = weapon;
	}
	
	getWeapon(){
		return this._weapon;
	}
	
	setHp(hp){
		this._hp = hp; 
	}
}

module.exports = Warrior;