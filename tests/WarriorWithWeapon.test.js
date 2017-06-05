"use strict";
const supertest = require('supertest');
const expect = require('chai').expect;

const Warrior = require('../militants/Warrior');
const Sword = require('../weapons/Sword');
const MagicStick = require('../weapons/MagicStick');
const Dagger = require('../weapons/Dagger');

describe('Server Fantasy Controller', () => {
  describe('Warrior with weapon test', () => {

    it('weapons should not be affect to initial hp', () => {
    	var w1 = new Warrior(10);
    	w1.addWeapon(new Sword());
    	expect(w1.getHp()).to.eql(10);
    });
    
    it('sword should be increase damage (7)', () => {
    	var w1 = new Warrior(10);
    	var w2 = new Warrior(10);
    	w1.addWeapon(new Sword());
    	w1.attack(w2);
    	expect(w1.getHp()).to.eql(10);
    	expect(w2.getHp()).to.eql(3);
    });
    
    it('magic stick should be increase damage (8)', () => {
    	var w1 = new Warrior(10);
    	var w2 = new Warrior(10);
    	w1.addWeapon(new MagicStick());
    	w1.attack(w2);
    	expect(w1.getHp()).to.eql(10);
    	expect(w2.getHp()).to.eql(2);
    });
    
    it('sword should be decrease damage (2)', () => {
    	var w1 = new Warrior(10);
    	var w2 = new Warrior(10);
    	w2.addWeapon(new Sword());
    	w1.attack(w2);
    	expect(w1.getHp()).to.eql(10);
    	expect(w2.getHp()).to.eql(10);
    });
    
    it('sword should be decrease damage (2) of weapon Dagger (5)', () => {
    	var w1 = new Warrior(10);
    	var w2 = new Warrior(10);
    	w1.addWeapon(new Dagger());
    	w2.addWeapon(new Sword());
    	w1.attack(w2);
    	expect(w1.getHp()).to.eql(10);
    	expect(w2.getHp()).to.eql(10 - 3);
    });
  });
  
})

