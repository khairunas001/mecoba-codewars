//day-1

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//fungsi biasa (mainstream)
//megggunakan perulangan
function grow(x){
    let result = x[0];
    for (let i = 1; i < x.length; i++){
        result = result * x[i];
    }
    return result
};

//dengan menggunakan high order function "reduce"
function grow(x){
    const result = x.reduce((acc, curr) => {
        return acc * curr;
    },1); //angka 1 disini berfungsi untuk mengalikan bilangan pertama karena semua bilangan dikali 1 akan sama
    return result
}

console.log(grow([1,2,3,4]))
//disini acc(accumulator) = "sebagai nilai yg ditambahkan"
// dan curr(current value) ="sebagai nilai saat ini"
function grow(x){
    const result = x.reduce((acc , curr) => acc*curr)
    return result
}
console.log(grow([1,2,3,4]))

const grow = (x) => x.reduce((acc,curr) => acc*curr)

console.log(grow([1,2,3,4]))