function convertToCelsius(Fah){
    return (Fah - 32) * 5/9;
  }

function rand(limit){
    return Math.round(Math.random()*limit);
  }

function createMessage(Fah, Cels){
    let message = '';
    const numCels = Cels * 1; // convert Cels to a number
    if(numCels === 0) {message = 'Water turns to Ice';} 
    else if(numCels === 100) { message = 'Water starts to boil';}
    else if(numCels === 233) {message = 'The books are burning!';}

    return `${Fah} degree Fahrenheit is ${Cels} degree Celsius. ${message}`;
  }

let fahrien = prompt('enter a number, we will convert that number from Fahrenheit to Celsius');
// fahrien = 32;
Cel = convertToCelsius(fahrien);
mess = createMessage(fahrien, Cel.toFixed(0));
console.log(mess);


fahrien = rand(600);
Cel = convertToCelsius(fahrien);
mess = createMessage(fahrien, Cel.toFixed(0));
console.log(mess);