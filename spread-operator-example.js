const car1 = ["AUDI", "BMW", "TATA", "MERCEDES"];

const car2 = [...car1];

const car3 = [...car1, "NISSAN", "TOYOTA"];

console.log(car1)
console.log(car2)
console.log(car3)

const car4 = [...car2, ...car3];
console.log(car4);

const cars1 = {
    Brand : "BMW",
    Color : "RED",
};
const cars2 = {...cars1};
console.log(cars2)

const cars3 = {
    Brand : "TOYOTA",
    Color : "Blue",
    Year : 2003
};

const cars4 = {
    Brand : "NISSAN",
    Color : "BLUE",
    Year : 2004
};

const cars5 = {...cars3, ...cars4};
console.log(cars5);

const car5 = "Audi";
const a = [...car5];
console.log(a)

const numbers = [3, 5, 7 , 8, 9];
const [b, c, d, ...others] = numbers;
console.log(b);
console.log(c);
console.log(d);
console.log(others);