"use strict";
const Battle = require('./war/Battle');
class Game{
	constructor(){
		this._heroes = [];
	}
	
	addHero(hero){
		this._heroes.push(hero);
		return (this._heroes.length - 1);
	}
	
	getHeroes(){
		return  this._heroes;
	}
	
	battle(id1, id2){
		var hero1 = this.getHero(id1);
		var hero2 = this.getHero(id2);
		var battle = new Battle(hero1,hero2);
		if(battle.getWinner() === hero1){
			return id1;
		}else{
			return id2;
		}
	}
	
	getHero(id){
		if(this._heroes[id]){
			return this._heroes[id];
		}
		throw "invalid id of hero : " + id;
	}
}

module.exports = Game;
