// day-16
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let average = 0
    let sum = 0
    for (let i = 0; i < marks.length; i++ ){
       sum = sum + marks[i]
       average = sum/marks.length
    }
    return Math.round(average);
    // Math.floor =  untuk membulatkan kebawah
    // Math.ceil = untuk membulatkan keatas
    // Math.round = untuk membulatkan ke nilai terdekat
}

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks arra
    return Math.floor(marks.reduce((acc, curr) => acc + curr,0)/marks.length)
}

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr,0)/marks.length)


console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,1,1,1,1,1,1,2]))
console.log(getAverage([1,2,3,4,5,]))