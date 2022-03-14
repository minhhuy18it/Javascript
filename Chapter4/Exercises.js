//The Sum of a Range
function range(start, end, step = start <= end ? 1 : -1) {
    let result = [];
    for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
        result.push(i);
    }
    return result;
}
function sum(number) {
    result = 0;
    for (let num of number) {
        result += num;
    }
    return result;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));


//Reversing an Array
function reverseArray(array) {
    result = [];
    for (let item of array) {
        result.unshift(item);
    }
    return result;
}
function reverseArrayInPlace(array) {
    let len = array.length;
    for (let i = 0; i < Math.floor(len/2); i++) {
        console.log(i, len-i-1, array[i], array[len-i-1], array);
        let swap = array[i];
        array[i] = array[len-i-1];
        array[len-i-1] = swap;
    }
    return array;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);