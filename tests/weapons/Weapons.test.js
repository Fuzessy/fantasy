"use strict";
const supertest = require('supertest');
const expect = require('chai').expect;

const Sword = require('../../weapons/Sword');
const Dagger = require('../../weapons/Dagger');
const MagicStick = require('../../weapons/MagicStick');

describe('Server Fantasy Controller', () => {
  describe('Weapon test', () => {

    it('Sword test', () => {
    	var w = new Sword();
    	expect(w.getDamage()).to.eql(7);
    	expect(w.getProtection()).to.eql(2);
    });
    
    it('Dagger test', () => {
    	var w = new Dagger();
    	expect(w.getDamage()).to.eql(5);
    	expect(w.getProtection()).to.eql(4);
    });
    
    it('Magic stick test', () => {
    	var w = new MagicStick();
    	expect(w.getDamage()).to.eql(8);
    	expect(w.getProtection()).to.eql(1);
    });
  });
  
})

