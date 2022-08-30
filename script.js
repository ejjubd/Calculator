let a = ''
let b = ''

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

let n = ""
const operators = ["/", "*", "+", "-"]
let shouldCalculate = false
let operator = ""
let temp = ""
let calc = 0

function getNumber(number) {

    if(operators.includes(number)){
        
        if(calc) {
            document.getElementById('upper-screen').innerHTML = calc+ " " +number
            temp = calc
        }
        else {
            document.getElementById('upper-screen').innerHTML = n+" "+number
            temp = n
        }
        shouldCalculate = false
        operator = number
        n = ""
        document.getElementById('down-screen').innerHTML = n

    } else if(shouldCalculate){
        
        calc += operate(operator, temp, number)
        document.getElementById('upper-screen').innerHTML = calc
        temp = ""
        shouldCalculate = false

    } else {
        n+=number
        document.getElementById('down-screen').innerHTML = n
    }
    

}








function clearScreen() {
    n = ''
    temp = ""
    calc=0
   document.getElementById('down-screen').innerHTML = '0'
   document.getElementById('upper-screen').innerHTML = ''
}


function deleteButton () {
   
    n = n.slice(0,-1)
    document.getElementById('down-screen').innerHTML = n
   
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