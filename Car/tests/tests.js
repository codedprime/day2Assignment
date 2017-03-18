(function(){
	'use strict';
	var Car = require("../app/Car.js");
	var SmartCar = require("../app/Car.js");  	
	var Truck = require("../app/Car.js"); 


	describe ("Car class: create a car, make it drive", function(){
		it("The car should be an instance of the 'Car' class and of 'object' type ", function(){
			var spider = new Car("Toyota", "Spider","Silver",2015);
			expect(typeof spider).toEqual(typeof []);
			expect(spider instanceof Car).toBeTruthy();
		});

		it("The car should return a cocatenation of its make and model as its name", function(){
			var spider = new Car("Toyota", "Spider","Silver",2015);
			expect(spider.getName()).toEqual("Toyota Spider");
		});
		

		it("A Truck should have 10 wheels ", function(){
			var myTruck = new Truck("Mack", "Tipper","Ash",2010);
			expect(myTruck.getWheels()).toEqual(10);
				

		});
		


		it("The car's make, model, color and year should all be members of its property", function(){
			var spider = new Car("Toyota", "Spider","Silver",2015);
			expect(spider.make).toBe("Toyota");
			expect(spider.model).toBe("Spider");
			expect(spider.color).toBe("Silver");
			expect(spider.year).toBe(2015);
		});

		it("The car's color property should change if resprayed to a different color", function(){
			var spider = new Car("Toyota", "Spider","Silver",2015);
			spider.respray("Black")
			expect(spider.color).toBe("Black");
			
		});



	});


	describe("Test the speed functionality", function() {
		it("The car should not move unless the engine is first started", function(){
			var spider = new Car ("Toyota", "Spider", "Silver",2015);
			expect(spider.accelerate()).toBe("Start engine before driving");
			spider.startCar();
			expect(spider.accelerate()).toBe(1);
		});


		it("The car should not nitro boost unless the engine is first started and speed is equal to 3km/h or more", function(){
			var spider = new Car ("Toyota", "Spider", "Silver",2015);			
			spider.startCar();
			spider.accelerate();
			expect(spider.nitroBoost(10)).toBe("Accelerate to a minimum of speed 3km/h, before nitro boost");
			spider.accelerate();
			spider.accelerate();
			spider.accelerate();
			expect(spider.nitroBoost(10)).toBe(14);
		});

		it("The car should not accelerate to a speed greater than 200", function(){
			var spider = new Car ("Toyota", "Spider", "Silver",2015);
			spider.startCar();
			spider.accelerate();
			spider.accelerate();			
			spider.accelerate();
			spider.nitroBoost(197);
			spider.accelerate();
			expect(spider.accelerate()).toBe("speed limit reached");
			expect(spider.nitroBoost(10)).toBe("speed limit reached");

		});

		it("The car should reduce in speed when the decelerate function is called ", function(){
			var spider = new Car ("Toyota", "Spider", "Silver",2015);
			spider.startCar();
			spider.accelerate();
			spider.accelerate();			
			spider.accelerate();
			expect(spider.accelerate()).toBe(4);
			spider.decelerate();
			spider.decelerate();
			expect(spider.decelerate()).toBeLessThan(3);		

		});


		it("The car should not decelerate below zero when the decelerate function is called ", function(){
			var spider = new Car ("Toyota", "Spider", "Silver",2015);
			spider.startCar();
			spider.accelerate();					
			spider.decelerate();
			spider.decelerate();
			expect(spider.decelerate()).toBe(0);		

		});

		it("The car should tell if the driver is too fast or slow if the speedCheck function is called ", function(){
			var spider = new Car ("Toyota", "Spider", "Silver",2015);
			spider.startCar();
			spider.accelerate();
			spider.accelerate();			
			spider.accelerate();
			expect(spider.speedCheck()).toBe("Slow!");
			spider.nitroBoost(80);
			expect(spider.speedCheck()).toBe("Good To Go!");
			spider.nitroBoost(80);
			expect(spider.speedCheck()).toBe("Too Fast!!!");	

		});		

		

	});


})();