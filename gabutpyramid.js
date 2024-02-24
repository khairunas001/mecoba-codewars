// // Pyramid reverse
// function pyramid(size){
//     let result = "";
//     for (let i = 0; i < size; i++){
//         for (let j = 0; j < i; j++){
//             result += " ";
//         }
//         for (let k = 0; k < (size-i)*2-1; k++){
//             result += "*";
//         }
//         result += "\n";
//     }
//     return result;
// }

// // Pyramid
// function pyramid(size){
//     let result = "";
//     for (let i = 0;i <= size; i++){
//         for(let j = size ; j > i; j--){
//             result += " "
//         }
//         for(let k=1; k < i*2; k++){
//             result += "*"
//         }
//         result += "\n"
//     }
//     return result
// }

// pyramid and reversed pyramid
function pyramid(size){
    let result = "";
    for (let i = 0; i < size; i++){
        for (let j = 0; j < i; j++){
            result += " ";
        }
        for (let k = 0; k < (size-i)*2-1; k++){
            result += "*";
        }
        result += "\n";
    }
    for (let i = 2;i <= size; i++){
        for(let j = size ; j > i; j--){
            result += " "
        }
        for(let k=0; k < i*2-1; k++){
            result += "*"
        }
        result += "\n"
    }
    return result
}



console.log(pyramid(105));