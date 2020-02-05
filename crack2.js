let enText = "ooeslsjgrulvdnmmhuwcxcq"
let enTextArray = enText.split("")
let enLength = enTextArray.length

let al = "abcdefghijklmnopqrstuvwxyz"
let alArray = al.split("")
let alLength = alArray.length // 23

const makeArray = function(num, letter) {
    let array = []
    for(ii = 0; ii < num; ii ++){
        array.push(letter)
    }
    return array
}

let array0 = makeArray(enLength, "a")
// console.log(firstArray)

const changeArray = function(array, index) {
    let arrays = []    
    let fArray = array.slice()
    for(ii = 0; ii < 26; ii++){
        fArray[index] = alArray[ii]
        arrays.push(fArray.join("").split(""))
    }
    return arrays
}
// console.log(changeArray(array0, 0))

arrays0 = []
arrays0 = arrays0.concat(changeArray(array0, 0).slice())

// arrays0.map(e => {
//     arrays0 = arrays0.concat(changeArray(e, 1).slice())
// })

for (kk = 0; kk < 0; kk++){
    arrays0.map(e => {
        arrays0 = arrays0.concat(changeArray(e, kk).slice())
    })
}

console.log(arrays0)