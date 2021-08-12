console.log("This is custom module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length; 
}

//module.exports = average;

// we can also export it as an object
//module.exports is an object in itself

module.exports  = {
    avg: average,
    name: "hitesh",
    age : 19
}