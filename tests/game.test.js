"use strict";
const supertest = require('supertest');
const expect = require('chai').expect;

const Game = require('../game');
const Priest = require('../militants/Priest');
const Warrior = require('../militants/Warrior');
const Sword = require('../weapons/Sword');

describe('Server Fantasy Game', () => {
  describe('Heroes store test', () => {

    it('added heroes should be preversed', () => {
    	var g = new Game();
    	var w = new Warrior(10);
    	w.addWeapon(new Sword());
    	g.addHero(w);
    	
    	var p = new Priest(20);
    	p.addWeapon(new Sword());
    	g.addHero(p);
    	
    	expect(g.getHeroes().length).to.eql(2);
    	expect(g.getHeroes()).to.include(p);
    	expect(g.getHeroes()).to.include(w);
    });

    it('should be return with the appropriate hero by the index', () => {
    	var g = new Game();
    	var w = new Warrior(10);
    	g.addHero(w);
    	
    	var p = new Priest(20);
    	g.addHero(p);
    	
    	expect(g.getHero(0)).to.include(w);
    	expect(g.getHero(1)).to.include(p);
    });
  });  
  
  describe('Battle test', () => {
    it('battle with wrong indexes, without heroes', () => {
    	var g = new Game();
    	expect(() => g.battle(1,2)).to.throw("invalid id of hero : 1");
    });
    
    it('battle with wrong indexes', () => {
    	var g = new Game();
    	g.addHero(new Warrior(10));
    	g.addHero(new Warrior(5));
    	expect(() => g.battle(1,2)).to.throw("invalid id of hero : 2");
    });
    
    it('should be win Warrior(10) against Warrior(5)', () => {
    	var g = new Game();
    	g.addHero(new Warrior(10));
    	g.addHero(new Warrior(5));
    	expect(g.battle(0,1)).to.eql(0);
    });
  });
})

