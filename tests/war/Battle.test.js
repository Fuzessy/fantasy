"use strict";
const supertest = require('supertest');
const expect = require('chai').expect;
const Warrior = require('../../militants/Warrior');
const Priest = require('../../militants/Priest');
const Battle = require('../../war/Battle');

describe('Server Fantasy Controller', () => {
	  describe('Battle.battle test', () => {

	    it('gizi(10) should be win the battle against joil(5)', () => {
	    	var gizi = new Warrior(10);
	    	var joli = new Warrior(5);
	    	
	    	var battle = new Battle(gizi,joli);	
	    	expect(battle.getWinner()).to.eql(gizi);
	    });
	    
	    it('gizi(5) should NOT be win the battle against joil(10)', () => {
	    	var gizi = new Warrior(5);
	    	var joli = new Warrior(10);
	    	
	    	var battle = new Battle(gizi,joli);
	    	expect(battle.getWinner()).to.eql(joli);
	    	expect(gizi.getHp()).to.eql(0);
	    	expect(joli.getHp()).to.eql(5);
	    });
	  });
	  
	  describe('Battle test - test from excercise', () => {

	    it('the pries shold be beat anybody who has not weapon (and not priest :))', () => {
	  	  var jon = new Warrior(10);
		  var thoros = new Priest(5);

		  var battle = new Battle(jon, thoros);
		  expect(battle.getWinner()).to.eql(thoros);
	    });
		    
	  });

});