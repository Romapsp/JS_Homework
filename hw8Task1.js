const numberArr = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
// TASK 1
numberArr.forEach((value) => {
    if(value % 3 == 0){
        console.log(value)
    }
})
// TASK 2
const mapArray = numberArr.map((value, index, arr) => {
    return value - arr.length
})

console.log(mapArray)
// TASK 3 
const filterArray = numberArr.filter((value, index, numberArr) => {
    return index > 0 && value > numberArr[index - 1]
})

console.log(filterArray)
// TASK 4
const findArray = numberArr.find((value, index, numberArr) => {
    return index == value
})

console.log(findArray)
// TASK 5 
const modifiedArray = [...numberArr]
const sortArray = modifiedArray.sort((a, b) => a - b)
console.log(modifiedArray)
// TASK 6 
const reduceArray = numberArr.reduce((accumulator, value) => {
    return accumulator + value
}, 0)
console.log(reduceArray)
// TASK 7 
const someArray = numberArr.some((value) => value > 90)
console.log(someArray)
// TASK 8 
const everyArray = numberArr.every((value, index, numberArr) => {
    if (value.toString().length == 2){
        return true
    }
})
console.log(everyArray)