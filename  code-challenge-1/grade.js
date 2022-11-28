const cc = require("prompt-sync");
const prompt = cc();

function calculator(){
    let score = prompt('Student marks" ');
    if(score <=100 && score > 79){
        console.log("Your score is A");
    }else if(score <= 79 && score > 59){
        console.log("Your score is B");
    }else if(score <= 59 && score > 49){
        console.log("Your score is C");
    }else if(score <= 49 && score > 39){
        console.log("Your score is D");
    }else if(score <= 39 && score > 0){
        console.log("Your score is E");
    }
    else{
        console.log("Not viable")
    }
    }
   calculator(); 
