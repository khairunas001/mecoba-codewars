//2-reverseSeq
//menggunakan perulangan terbalik
const reverseSeq = n => {
    const result = [];
    for (let i = n; i>=1; i-- ){
        result.push(i)
    }
    return result;
};


console.log(reverseSeq(10))

const reverseSeq = n => {
    return Array(n)
    .fill()
    .map((el , i)=> i+1)
    .reverse()
    
};
  
console.log(reverseSeq(5))

const reverseSeq = n => Array(n).fill().map((el , i)=> i+1).reverse();

console.log(reverseSeq(5))

//menggunakkan spread oprattor
const reverseSeq = n =>[...Array(n)].fill().map((el , i)=> n-i);

console.log(reverseSeq(5))