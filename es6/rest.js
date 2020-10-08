function myAddition(x, ...a) {
    sum = 0;
    a.forEach((val) => {
        sum = sum + val;
    })
    return x * sum;
}
console.log(myAddition(2, 3));
console.log(myAddition(2, 3, 5));
console.log(myAddition(2, 3, 5, 2, 3));