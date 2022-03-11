//Minimum
start = prompt("starting number");
stop = prompt("ending number");
function min(a,b){
    var result = b;
    if (a < b)
      result = a;
    return result;
}
console.log(Math.min(min(start,stop)));

//Recursion
function isEven(a) {
    if (a % 2 == 0)
      return true;
    if (a == 1)
      return false;
    if (a < 0)
      return "odd";
    else return isEven(a - 2);
}
console.log(isEven(0));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Bean Counting
function countBs(chuoi) {
    var Counting = 0; 
    for (var i = 0; i < chuoi.length; i += 1) {
        if (chuoi.charAt(i) === "B")
        Counting += 1;
    }
    return Counting;
}

function countChar(chuoi, chu) {
    var Counting = 0; 
    for (var i = 0; i < chuoi.length; i += 1) {
        if (chuoi.charAt(i) === chu)
        Counting += 1;
    }
    return Counting;
}
  console.log(countBs("BAO CHAU"));
  console.log(countChar("BAO CHAU", "A"));