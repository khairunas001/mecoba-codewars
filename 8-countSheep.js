// day-8
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
    //your code here
    let result = "";
    var kambing = " sheep..."
    for (let i = 1; i<= num; i++){
        result += `${i}${kambing}`
      
    }
    return result
  }
  const mumer = countSheep(5);
  console.log(mumer)

var countSheep = function (num){
    //your code here
    return [...Array(num)].map((el,i) => `${i+1} sheep...`).join('')
}

var countSheep = (num) => [...Array(num)].map((el,i) => `${i+1} sheep...`).join('')

console.log(countSheep(5))