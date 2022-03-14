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
