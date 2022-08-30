let a = ''
let b = ''

function add (a,b){
    return a + b ;
}

function substract(a,b) {
    return a - b ;
}

function multiply(a,b) {
    return a * b;
}

function divide (a,b) {
    return a/b
}


function operate(operator,a,b){
    a = Number (a);
    b = Number (b);
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















function clear () {
    const clear = document.querySelector('#clear')
    clear.addEventListener('click', function() {
    document.getElementById('down-screen').innerHTML = '0'

})
}


function work(){
    deleteButton();

  clear();
  
}



function clear () {
    const clear = document.querySelector('#clear')
    clear.addEventListener('click', function() {
    document.getElementById('down-screen').innerHTML = '0'

})
}

function deleteButton () {
 const deletes = document.querySelector('#delete')
 deletes.addEventListener('click', function(){
    document.getElementById('down-screen').textContent = document.getElementById('down-screen').textContent.slice(0, -1)
    
 })
}

work();



















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