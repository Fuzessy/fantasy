const Main = require('../../main');
const supertest = require('supertest');
const expect = require('chai').expect;

describe('Server Heroes Controller', () => {
  let request;

  beforeEach(() => {
    request = supertest.agent(Main.create().listen());
  });

  describe('GET /heroes', () => {

    it('should respond with empty array if there is no heroes stores', async () => {
      let result = await request.get('/heroes');

      expect(result.statusCode).to.eql(200);
      expect(result.body).to.eql([]);
    });

  });

  describe('POST /heroes', () => {

    it('should accept a valid hero', async () => {
      let result = await request.post('/heroes')
        .send({ type: "Priest", hp: 30, weapon: "Sword" })
        .set('Accept', 'application/json');

      expect(result.statusCode).to.eql(201);
    });

    it('should save a valid hero', async () => {
      let hero = { type: "Priest", hp: 30, weapon: "Sword" };
      await request.post('/heroes')
		.send(hero)
        .set('Accept', 'application/json');

      let result = await request.get('/heroes');

      expect(result.body).to.eql([{id:0,type: "Priest", hp: 30, weapon : "Sword"}]);
    });

	it('should save more valid hero', async () => {
      	var r = await request.post('/heroes')
			.send({ type: "Priest", hp: 10, weapon: "MagicStick" })
        	.set('Accept', 'application/json');
		expect(r.body).to.eql(0);

      	r = await request.post('/heroes')
			.send({ type: "Warrior", hp: 20, weapon: "Dagger" })
        	.set('Accept', 'application/json');	
		expect(r.body).to.eql(1);	
	
      let result = await request.get('/heroes');
      expect(result.body).to.eql([
			{id:0,type: "Priest" , hp: 10 , weapon : "MagicStick"},
			{id:1,type: "Warrior", hp: 20, weapon : "Dagger"}]);
    });

  });

  describe('GET /battle', () => {

    it('warrior1(hp:10) should win the battle against warrior2(hp5)', async () => {
    	let id1 = await request.post('/heroes')
		.send({ type: "Warrior", hp: 10 , weapon: "Sword"})
    	.set('Accept', 'application/json');	
    	let id2 = await request.post('/heroes')
		.send({ type: "Warrior", hp: 5 })
		.set('Accept', 'application/json');
    	
    	let r = await request.get('/heroes');
    	
    	let result = await request.get('/battle?hero1=0&hero2=1');
    	
    	expect(result.text).to.eql('0');

    });
    
    it('warrior(hp:30, magicstick) should win the battle against priest(hp:24,sword)'+
    		' but loose battle against Warrior(hp:6)', async () => {
    	let id1 = await request.post('/heroes')
		.send({ type: "Warrior", hp: 30 , weapon: "MagicStick"})
    	.set('Accept', 'application/json');	
    	let id2 = await request.post('/heroes')
		.send({ type: "Priest", hp: 24, weapon: "Sword" })
		.set('Accept', 'application/json');
    	let id3 = await request.post('/heroes')
		.send({ type: "Warrior", hp: 1, weapon: "Sword" })
		.set('Accept', 'application/json');
    	
    	let result = await request.get('/battle?hero1=0&hero2=1');
    	expect(result.text).to.eql('0');
    	    	
    	result = await request.get('/battle?hero1=2&hero2=0');
    	expect(result.text).to.eql('2');

    });
  });

});
