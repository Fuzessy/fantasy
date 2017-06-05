"use strict";
const supertest = require('supertest');
const expect = require('chai').expect;

const Priest = require('../militants/Priest');
const Warrior = require('../militants/Warrior');
const MagicStick = require('../weapons/MagicStick');

describe('Server Fantasy Controller', () => {
  describe('Priest test', () => {

    it('Priest should be attack "same" as warrior', () => {
    	var p = new Priest(10);
    	var w = new Warrior(10);
    	expect(p.getHp()).to.eql(10);
    	expect(w.getHp()).to.eql(10);
    	p.attack(w);
    	expect(p.getHp()).to.eql(10);
    	expect(w.getHp()).to.eql(9);
    	p.attack(w);
    	expect(p.getHp()).to.eql(10);
    	expect(w.getHp()).to.eql(8);
    });
    
    it('Priest should be damaged "same" as warrior', () => {
    	var p = new Priest(10);
    	var w = new Warrior(10);
    	expect(p.getHp()).to.eql(10);
    	expect(w.getHp()).to.eql(10);
    	w.attack(p);
    	expect(w.getHp()).to.eql(10);
    	expect(p.getHp()).to.eql(9);
    	w.attack(p);
    	expect(w.getHp()).to.eql(10);
    	expect(p.getHp()).to.eql(8);
    });
    
    it('Priest should heal oneself (+1hp) before attack', () => {
    	var p = new Priest(10);
    	var w = new Warrior(10);
    	expect(p.getHp()).to.eql(10);
    	expect(w.getHp()).to.eql(10);
    	
    	w.attack(p);
    	expect(w.getHp()).to.eql(10);
    	expect(p.getHp()).to.eql(9);
    	
    	p.attack(w);
    	expect(w.getHp()).to.eql(9);
    	expect(p.getHp()).to.eql(10);
    });
    
    it('Priest should use weapon too for attack', () => {
    	var p = new Priest(10);
    	var w = new Warrior(10);
    	expect(p.getHp()).to.eql(10);
    	expect(w.getHp()).to.eql(10);
    	
    	p.addWeapon(new MagicStick());
    	p.attack(w);
    	
    	expect(p.getHp()).to.eql(10);
    	expect(w.getHp()).to.eql(2);
    });
    
    it('Priest should use weapon too for defense', () => {
    	var p = new Priest(10);
    	var w = new Warrior(10);
    	expect(p.getHp()).to.eql(10);
    	expect(w.getHp()).to.eql(10);
    	
    	p.addWeapon(new MagicStick());
    	w.addWeapon(new MagicStick());
    	w.attack(p);
    	
    	expect(p.getHp()).to.eql(10-8+1);
    	expect(w.getHp()).to.eql(10);
    });
  });  
})

