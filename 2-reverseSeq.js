//2-reverseSeq
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
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