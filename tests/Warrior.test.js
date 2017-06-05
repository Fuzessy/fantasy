"use strict";
const supertest = require('supertest');
const expect = require('chai').expect;

const Warrior = require('../militants/Warrior');

describe('Server Fantasy Controller', () => {
  describe('Warrior test', () => {

    it('should be created with hp 10', () => {
    	var w1 = new Warrior(10);
    	expect(w1.getHp()).to.eql(10);
    });
    
    it('should not be created with hp -1', () => {
    	expect(() => new Warrior(-1)).to.throw("HP 0 is the minimum!");
    });
    
    it('should be created with hp 30', () => {
    	var w1 = new Warrior(30);
    	expect(w1.getHp()).to.eql(30);
    });


    it('should not be created with hp 31', () => {
    	expect(() => new Warrior(31)).to.throw("HP 30 is the maximum!");
    });
  });

  describe('Warrior attack test', () => {

	    it('attack should be decrease initial hp', () => {
	    	var w1 = new Warrior(10);
	    	var w2 = new Warrior(10);
	    	
	    	expect(w1.getHp()).to.eql(10);
	    	w1.attack(w2);
	    	expect(w2.getHp()).to.eql(9);
	    });
	    
	    it('attack should be decrease hp', () => {
	    	var w1 = new Warrior(10);
	    	var w2 = new Warrior(10);
	    	
	    	expect(w1.getHp()).to.eql(10);
	    	w1.attack(w2);
	    	expect(w2.getHp()).to.eql(9);
	    	w2.attack(w1);
	    	expect(w1.getHp()).to.eql(9);
	    	w2.attack(w1);
	    	expect(w1.getHp()).to.eql(8);
	    });
	    
	  });
  
})

