const bodyParser = require('koa-body')();
const Game = require('../game');
const Warrior = require('../militants/Warrior');
const Priest = require('../militants/Priest');
const Sword = require('../weapons/Sword');
const Dagger = require('../weapons/Dagger');
const MagicStick = require('../weapons/MagicStick');

module.exports = (app, router) => {

  let game = new Game();
  
  router.get('/heroes', async (ctx) => {
	var heroes = game.getHeroes();
	var response = [];
	var index = 0;
	heroes.forEach(function (item) {
	  response.push(
			  {	
				  id:index, 
				  type:item.constructor.name, 
				  hp:item.getHp(),
				  weapon:item.getWeapon().constructor.name
			  });
	  index++;
	});  
	ctx.body = response;
  });

  router.post('/heroes', bodyParser, async (ctx) => {
    const rhero = ctx.request.body;
    // { type: 'warrior', hp: 30, weapon: 'sword' }
    let hero;
    
    if(rhero.type == 'Warrior'){
    	hero = new Warrior(rhero.hp);
    }else if(rhero.type == 'Priest'){
    	hero = new Priest(rhero.hp);
    }else{
    	throw "type is unknown"
    }
	
    if(rhero.weapon == 'Sword'){
    	hero.addWeapon(new Sword());
    }else if(rhero.weapon == 'Dagger'){
    	hero.addWeapon(new Dagger());
    }else if(rhero.weapon == 'MagicStick'){
    	hero.addWeapon(new MagicStick());
    }else{
    	throw "weapon is unknown"
    }
    
    let id = game.addHero(hero);
	console.log("hero id :" + id);
    ctx.body = id;
    ctx.status = 201;
  });

};
