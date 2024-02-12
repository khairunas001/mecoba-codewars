// day-14
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
    // Code here
    let averageGrade = (s1+s2+s3)/3
    if (averageGrade>=90 && averageGrade<=100){
        return "A"
    } else if (averageGrade>=80 && averageGrade<90){
        return "B"
    } else if (averageGrade>=70 && averageGrade<80){
        return "C"
    } else if (averageGrade>=60 && averageGrade<70){
        return "D"
    } else if (averageGrade>=0 && averageGrade<60){
        return "F"
    }
}


function getGrade (s1, s2, s3) {
    // Code here
    let averageGrade=(s1+s2+s3)/3;
    if (averageGrade<60) return "F"
    if (averageGrade<70) return "D"
    if (averageGrade<80) return "C"
    if (averageGrade<90) return "B"
    if (averageGrade<100) return "A"
}

function getGrade (...s) {
    // Code here
    let averageGrade = s.reduce((acc, curr)=>acc+curr)/s.length;
    if (averageGrade<60) return "F"
    if (averageGrade<70) return "D"
    if (averageGrade<80) return "C"
    if (averageGrade<90) return "B"
    return "A"
}
console.log(getGrade(92,93,94))
console.log(getGrade(89,89,90))
console.log(getGrade(60,82,76))
console.log(getGrade(66,62,68))
console.log(getGrade(48,55,52))