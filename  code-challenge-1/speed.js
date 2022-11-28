const sd = require('prompt-sync');
const prompt = sd();

function speedDetector(){
    let speed = prompt("what is the speed? ");
    if (speed <= 70) {
        console.log("Ok")
    }else if(speed > 70 && speed <= 130){
        let demeritPoint = (speed - 70) / 5;
        console.log('Points: ${demeritPoint}');
    }else{
        console.log("License suspended");
    }
}
speedDetector();