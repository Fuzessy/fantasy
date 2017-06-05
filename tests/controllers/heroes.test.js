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
	console.log(result.body	);
      expect(result.body).to.eql([
			{id:0,type: "Priest" , hp: 10 , weapon : "MagicStick"},
			{id:1,type: "Warrior", hp: 20, weapon : "Dagger"}]);
    });

  });

});
