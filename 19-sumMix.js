// day-19
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){
    let jumlahSemua = 0;
    for (let i =0; i< x.length; i++){
        // jumlahSemua += parseInt(x[i])
        // jumlahSemua += Number(x[i])
        jumlahSemua += +x[i]
    }
    return jumlahSemua
}


function sumMix(x){
    // return x.reduce((acc,curr) => parseInt(acc) + parseInt(curr));
    // return x.reduce((acc,curr) => Number(acc) + Number(curr));
    return x.reduce((acc,curr) => +acc + +curr);
}

const  sumMix = (x) => x.reduce((acc,curr) => +acc + +curr);



console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
