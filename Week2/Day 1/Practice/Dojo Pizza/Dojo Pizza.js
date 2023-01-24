var pizzaOven = 
{
    crustType:    ["deepdish","hand tossed"]
    sauceType:  ["tradional","marinara"]
    cheeses:   ["mozzarella","feta"]
    toppings: ["pepperoni", "sausage", "mashrooms","olives","onions"]
};

console.log(pizaaOven);

function pizzaFactory(crustType,sauceType,cheeses,toppings)
{
var pizzaOven = {};
pizzaOven.crustType= crustType; 
pizzaOven.sauceType= sauceType;
pizzaOven.cheeses= cheeses;
pizzaOven.toppings= toppings;

};

console.log(pizzaOven);
    

pizzaOven("deep dish", "traditional", "mozzarella",["pepperoni","sausage"]);
pizzaOven("hand tossed", "marinara", ["mozzarella","feta"],["mushrooms","olives","onions"]);

console.log("<-------------Bonus---------->")
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }