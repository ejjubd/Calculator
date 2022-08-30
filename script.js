

function add (a,b){
    return a+b
}

function substract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide (a,b) {
    return a/b
}


function operate(operator,a,b){
    a = parseInt(a)
    b = parseInt(b)
    switch (operator) {
        case '-':
            return substract(a,b);
        case '+':
            return add(a,b);
        case '/':
            return divide (a,b);
        case '*':
            return multiply(a,b);

    }
}

const operators = ["/", "*", "+", "-"]

let array = []
let n = ""

let a = '';
let b = '';
let operator;








function clearScreen() {
    n = ''
    temp = ""
    calc=0
   document.getElementById('down-screen').innerHTML = '0'
   document.getElementById('upper-screen').innerHTML = ''
}


function deleteButton () {
   

    n = n.slice(0,-1)
    if(n === "") document.getElementById('down-screen').innerHTML = 0
    else document.getElementById('down-screen').innerHTML = n
}
   






















/*

const person = {
    name: "Umejr",
    lastName: "Demir",
    age:22,
    brothers: ["Ejjub", "Velid", "Abdullah"],
    sisters: ["Sara"]
};

console.log(person.age);
console.log(person.lastName);
console.log(person.name);

const person2 = {...person, name: "iahsfoia"}

*/