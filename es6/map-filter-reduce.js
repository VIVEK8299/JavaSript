//map
// let arr = [2, 3, 4];
// let arrArray = arr.map(val => val * 5);
// console.log(arrArray);
//filter
// let arr = [2, 3, 4, 5, 6, 7, 8];
// let newArray = arr.filter(val => val % 2 == 0); //2 4 6 8
// console.log(newArray)
//reduce
let arr = [2, 3, 4, 5, 6];
let result = arr.reduce((a, c) => {
    return (a + c);
})
console.log(result)