// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// day-4
function smash (words) {
    return words.join(" ")
};

const smash = (words) => words.join(" ")

function smash(words){
    let result = '';
    for (let i = 0; i < words.length; i++){
        result += words[i];
        if (i != words.length-1) result += " ";
    }
    return result;
}

console.log(smash(["this", "is", "a", "really", "long", "sentence"]))