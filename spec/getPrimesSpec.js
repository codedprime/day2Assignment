(function(){
	'use strict';
	describe("The getPrime function", function(){
		describe("The valid inputs for the getPrime function", function(){
			it("should return 'invalid input' when a number data type is not passed", function(){
			expect(getPrimes('5')).toBe('invalid input');
			expect(getPrimes([5])).toBe('invalid input');
			});
			it("should return 'invalid input' when a string is passed", function(){
			expect(getPrimes('seven')).toBe('invalid input');
			});
			it("should return 'invalid input' when nothing is passed", function(){
			expect(getPrimes()).toBe('invalid input');
			expect(getPrimes(null)).toBe('invalid input');
			});
		});
	


		describe("A case for positive values", function(){
			it("should return an empty array when 1 is passed", function(){
			expect(getPrimes(1)).toEqual([]);		
			});

			it("should return [2] when 2 is passed", function(){
			expect(getPrimes(2)).toEqual([2]);		
			});

			it("should return [2,5,7] when 8 is passed", function(){
			expect(getPrimes(8)).toEqual([2,3,5,7]);
			});

			it("should return [2,5,7,11,13,17] when 8 is passed", function(){
			expect(getPrimes(17)).toEqual([2,3,5,7,11,13,17]);
			});
		});

			describe("A case for negative values", function(){
			it("should return an empty array when -1 is passed", function(){
			expect(getPrimes(-1)).toEqual([]);		
			});

			it("should return [-2] when -2 is passed", function(){
			expect(getPrimes(-2)).toEqual([-2]);		
			});

			it("should return [-2,-3,-5,-7] when 8 is passed", function(){
			expect(getPrimes(-8)).toEqual([-2,-3,-5,-7]);
			});

			it("should return [-2,-5,-7,-11,-13,-17] when -17 is passed", function(){
			expect(getPrimes(-17)).toEqual([-2,-3,-5,-7,-11,-13,-17]);
			});
		});


		describe("A case for output", function(){
			it("should return an array object", function(){
			expect(typeof getPrimes(10)).toEqual(typeof {});		
			});

			
		});

	





	});


})();