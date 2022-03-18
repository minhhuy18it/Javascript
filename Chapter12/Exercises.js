//Array
topScope.array = (...values) => values;

topScope.length = array => array.length;

topScope.element = (array, n) => array[n];

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);

//Comments
function skipSpace(string) {
    let skip = string.match(/^(\s|#.*)*/);
    return string.slice(skip[0].length);
}

console.log(parse("# hello\nx"));
console.log(parse("a # one\n   # two\n()"));
