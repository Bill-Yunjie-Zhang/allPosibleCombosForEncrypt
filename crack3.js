// let arr0 = []
// for (ii = 0; ii < 23; ii++){
//     arr0.push(0)
// }
// while ( arr0[22] < 26) {
//     let jj = 0
//     arr0.forEach(e => {
//         if (e < 23){
//             e 
//         }
//     })
// }
// console.log(arr0)

let high = 0
for (ii = 0; ii < 23; ii ++){
    high += + 26 * Math.pow(27, ii)
}
// console.log(high)

// let arr = []
// for (jj = 0; jj < high; jj++){
//     arr.push(jj)
// }
// console.log(arr)

const convert26 = function(num, arr){
    if (num / 26 < 1){
        arr.unshift(num % 26)
    } else {
        arr.unshift(num % 26)
        num = Math.floor(num / 26)
        convert26(num, arr)
    }
}

// let arr0 = []
// convert26(36, arr0)
let arr1 = []
for (jj = 0; jj < high; jj ++){
    let arr0 = []
    convert26(jj, arr0)
    for (kk = arr0.length; kk < 23; kk++){
        arr0.push(0)
    }
    // arr1.push(arr0)
    console.log(arr0)
    arr0 = []
}
// console.log(arr1)
// console.log(arr0)