// day-18
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

function greet (name, owner) {
    // Add code here
    if (name === owner){
        return 'Hello boss'
    } else{
        return 'Hello guest'
    }
}


function greet (name, owner) {
    // Add code here
    return name === owner ? 'Hello boss' : 'Hello guest'
}

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'


console.log(greet('Daniel', 'Daniel'))