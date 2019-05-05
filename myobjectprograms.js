var myObj = [{
    "name": "John",
    "age": 30,
    "cars": [
        { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
        { "name": "BMW", "models": ["320", "X3", "X5"] },
        { "name": "Fiat", "models": ["500", "Panda"] }
    ]
},
{
    "name": "Adam",
    "age": 45,
    "cars": [
        { "name": "Chevy", "models": ["Malibu", "Impala"] }
    ]
},
{
    "name": "Jason",
    "age": 25,
    "cars": []
},
{
    "name": "Mary",
    "age": 40,
    "cars": [
        { "name": "Ford", "models": ["Mustang"] },
        { "name": "Audi", "models": ["A8"] },
        { "name": "Fiat", "models": ["500", "Panda"] },
        { "name": "BMW", "models": ["320", "X3", "X5"] },
    ]
}];



var x = [];
for (i = 0; i < myObj.length; i++) {
    if (myObj[i].cars.length != 0) {
        x.push(myObj[i].name);
    }
}
//console.log(x);

function personCars() {
    var a = [];
    for (i = 0; i < myObj.length; i++) {
        for (j = 0; j < myObj[i].cars.length; j++) {
            a.push(myObj[i].cars[j].name);
        }
    }
    console.log(a);

}

//personCars()

function carNames() {
    var carBrands = myObj.map(function (a) {
        var cars1 = a.cars.map(function (c) {
            return c.name;
        });

        return cars1;
    });
    return carBrands;
}

//var b = carNames();
//console.log(b);


function carsNewNames() {
    let allCars = myObj.map(function (a) {
        let cars1 = a.cars.map(function (c) {
            return c.models;

        });
        return cars1;
    });
    return allCars;
}

//var z = carsNewNames();
//console.log(z);


function carsFilter() {
    var allCars = myObj.filter(function (a) {
        var carBrands = a.cars.filter(function (b) {
            var filteredcars = b.models.filter(function (c) {
                return c === "Mustang";
            });
            return filteredcars.length > 0;
        });
        return carBrands.length > 0;
    });
    
    var result = [];
    allCars.forEach(element => {
        result.push(element.name);
    });
    return result;
}

var x = carsFilter();
console.log(x);