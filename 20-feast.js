// day-10
// https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {
    // return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
    // return beast.charAt(0) === dish.charAt(0) && beast[beast.length - 1] === dish[dish.length - 1];
    return beast.at(0) === dish.at(0) && beast.at(-1)=== dish.at(-1); // at(0) untuk menunjukkan elemen paling awal dan at(-1) untuk menunjukkan elemen paling akhir
}

const feast = (beast, dish) => beast.at(0) === dish.at(0) && beast.at(-1)=== dish.at(-1); // at(0) untuk menunjukkan elemen paling awal dan at(-1) untuk menunjukkan elemen paling akhir

console.log(feast("brown bear", "bear claw"))
console.log(feast("chickadee", "chocolate cake"))
console.log(feast("great blue heron", "garlic naan"))