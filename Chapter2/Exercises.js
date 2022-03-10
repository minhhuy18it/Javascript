
//Looping a Triangle
for (let i = "#"; i.length <= 7; i += "#") {
    console.log(i);
}

//FizzBuzz
for (let i = 0; i < 101; i ++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 5 == 0) {
        console.log("Buzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    } 
    else{
        console.log(i);
    }
}

//Chessboard
var total = (8 * 8) + 8;
var a = "";
for (i = 0; i < total; i++) {
  if (i % (8 + 1) == 0)
    a += "\n";
  else if (i % 2 == 0)
    a += "#";
  else
    a += " ";
}
console.log(a);
  