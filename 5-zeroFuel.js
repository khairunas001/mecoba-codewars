// day5
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// dengan mengkali mpg dengan bahan bakar tersisa harus lebih besar samadengan dengan jarak
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return mpg*fuelLeft >= distanceToPump;
};


// dengan membagi jarak dengan mpg lebih kecil dari bahan bakar tersisa
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return distanceToPump / mpg <=  fuelLeft;
};

// oneline
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg*fuelLeft >= distanceToPump;

console.log(zeroFuel(50, 25, 2))