"use strict";
require('../militants/Warrior');

class Battle{
	constructor(w1,w2){
		this._w1 = w1;
		this._w2 = w2;
		while(!this.hasWinner(w1,w2)){
			w1.attack(w2);
			if(!this.hasWinner(w1,w2)){
				w2.attack(w1);
			}
		}
	}
	
	hasWinner(w1,w2){
		return (w1.getHp() <= 0 || w2.getHp() <= 0) ;
	}
	
	getWinner(){
		if(this._w1.getHp() > 0){
			return this._w1;
		}else{
			return this._w2;
		}
	}
}

module.exports = Battle;