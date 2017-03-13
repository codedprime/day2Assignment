function Car (make, model, color, year)
{
 this.make = make;
 this.model = model;
 this.color = color;
 this.year = year;
 this.speed;
 this.wheels=4;
}

Car.prototype.getName = function()
{
   return (this.make +" " +this.model);
}
Car.prototype.getWheels = function()
{
   return this.wheels ;
}
Car.prototype.respray = function(newColor)
{
   this.color = newColor
   return this.color;
}

Car.prototype.startCar = function(){
 if (typeof this.speed == 'undefined'){
 this.speed = 0;
}
else
{
  return 'Engine already on';
}
}
Car.prototype.accelerate = function(){

 if ((typeof this.speed == 'number') &&(this.speed<=200)){
  return ++this.speed;
}
else if (this.speed >200)
{
	return ("speed limit reached")
}
else
{
  return 'Start engine before driving';
}
}
Car.prototype.nitroBoost = function(newSpeed){
if ((this.speed >= 3)&&((this.speed + newSpeed) <=200)){
  return this.speed +=newSpeed;
}
else if ((this.speed >200) || ((this.speed + newSpeed) > 200))
{
	return ("speed limit reached")
}



else
{
  return 'Accelerate to a minimum of speed 3km/h, before nitro boost';
}
}

Car.prototype.decelerate = function(){
 if (this.speed > 0){
 return --this.speed;
}
else 
return this.speed;
}

Car.prototype.speedCheck = function(){
 if (this.speed > 150){
 return "Too Fast!!!"
}
else if (this.speed > 70 && this.speed <150) {
return "Good To Go!";
}
else if (this.speed > 1 && this.speed <70){ 
return "Slow!";
}
}



var inheritsFrom = function (superclass, subclass) {
    subclass.prototype = Object.create(superclass.prototype);
};

function SmartCar (make, model, color, year)
{
 this.make = make;
 this.model = model;
 this.color = color;
 this.year = year;
 this.wheels = 4;
 this.speed = 4;
  
}

function Truck (make, model, color, year)
{
 this.make = make;
 this.model = model;
 this.color = color;
 this.year = year;
 this.wheels = 10;
 this.speed ;
  
}

inheritsFrom(Car,SmartCar);
inheritsFrom(Car,Truck);



