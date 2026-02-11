function greet(name = "Guest") {
    return "Hello " + name;
}

console.log(greet("Haruun"));
console.log(greet());

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log("Sum:", addNumbers(5, 7));

let x = 10;

function changeValue() {
    let x = 20;
    console.log("Inside function:", x);
}

console.log("Before function call:", x);
changeValue();
console.log("After function call:", x);

function outerFunction() {
    let count = 0;

    return function () {
        count++;
        console.log("Count:", count);
    };
}

const counter = outerFunction();

counter();
counter();
counter();

function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log("Double of 5:", double(5));
