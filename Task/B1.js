setTimeout(() => {
    console.log('hello event loop')
}, 0)

function pause(millis) {
    var date = new Date();
    //console.log(date)
    var currentDate = null;
    do {
        currentDate = new Date();
        //console.log(currentDate)
    }
    while (currentDate - date < millis);
}

pause(5000)