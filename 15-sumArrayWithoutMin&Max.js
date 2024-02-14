// day-15
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//     if (array === null) {
//         return 0; // Mengembalikan 0 jika input adalah null
//     }
//     let minValue = array[0]
//     let maxValue = array[0]
//     for (let i = 1; i < array.length; i++) {
//         if (maxValue < array[i]) {
//             maxValue = array[i];
//         } else if (minValue > array[i]) {
//             minValue = array[i];
//         } else {
//             return 0
//         }
//     }
//     let arrWithoutMinMax = array.filter(value => value !== minValue && value !== maxValue);
//     let sumTotal = arrWithoutMinMax.reduce((total, currentValue) => total + currentValue, 0);
//     return sumTotal;
// }

function sumArray(array) {
    if (array === null || array.length <=2 ) return 0;
    /*fungsi sort berguna untuk mengurutkan nilai array*/
    const sorted = array.sort((a, b) => a-b)
    /*return sorted untuk mengecek output 
     dari sorted apakah sudah urut*/
    let result = 0
    /*melakukan looping pada array sorted dari 
    index ke 1 hingga sebelum index terakhir*/
    for(let i=1; i<sorted.length-1; i++){
        result += array[i]
    }
    return result

}


function sumArray(array) {
    if (array === null || array.length <=2 ) return 0;
     return array
     .sort((a, b) => a-b)
    /*slice disini digunakan untuk memotong array yang tidak diinginkan
    dimana kita mulai dengan mengambil array index ke 1 dan mengakhiri dengan
    array index ke -1 yang berarti minus 1 adalah array terakhir
    yang ditunjukkan dibelakang 0*/
     .slice(1, -1)
    //  reduce berfungsi sebagai untuk menjumlahkan array
     .reduce((acc, curr) => acc + curr )
}


function sumArray(array) {
    return array === null || array.length <=2 
        // ternary atau simbol "?" sama artinya dengan if
        ? 0
        //  dan simbol ":" sama artinya dengan else
        : array
            .sort((a, b) => a-b)
            .slice(1, -1)
            .reduce((acc, curr) => acc + curr )
}


const sumArray = (array) => array == null || array.length <=2 
        // ternary atau simbol "?" sama artinya dengan if
        ? 0
        //  dan simbol ":" sama artinya dengan else
        : array
            .sort((a, b) => a-b)
            .slice(1, -1)
            .reduce((acc, curr) => acc + curr )

const sumArray = (array) =>
    array 
        ? array
            .sort((a, b) => a - b)
            .slice(1, -1)
            .reduce((acc, curr) => acc + curr )
        : 0;

console.log(sumArray([ 0, 1, 6, 10, 10 ]))