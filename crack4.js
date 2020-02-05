const enText = "oo"
// const enText = "ooeslsjgrulvdnmmhuwcxcq"
const enTextArray = enText.split("")
const enLength = enTextArray.length // 23
// console.log(enLength)

const al = "abcdefghijklmnopqrstuvwxyz"
const alArray = al.split("")
const alLength = alArray.length //26
// console.log(alLength)

let high = 0
for (ii = 0; ii < enLength; ii ++){
    high += (alLength - 1) * Math.pow(alLength, ii)
}
// console.log(high)

const convert26 = function(num, arr){
    if (num / alLength < 1){
        arr.push(num % alLength)
    } else {
        arr.push(num % alLength)
        num = Math.floor(num / alLength)
        convert26(num, arr)
    }
}
// let arr = []
// convert26(high, arr)
// console.log(arr)

for (jj = 0; jj <= high; jj ++){
    let arr0 = []
    convert26(jj, arr0)
    for (kk = arr0.length; kk < enLength; kk ++){
        arr0.push(0)
    }
    for (ll = 0; ll < arr0.length; ll ++){
        for (mm = 0; mm < alArray.length; mm ++){
            if (arr0[ll] === mm){
                arr0[ll] = alArray[mm]
            }
        }
    }
    console.log(arr0.join(""))
    // console.log(jj + ": " + arr0.join(""))
    // console.log(arr0)
    arr0 = []
}
