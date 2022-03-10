
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

  