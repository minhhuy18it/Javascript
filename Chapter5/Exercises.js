//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((array1, array2) => array1.concat(array2)));


//looping version
function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);