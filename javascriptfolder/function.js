// functio declaration
function add(){
    let num1= 3;
    let num2= 7;
    // add two numbers
    let sum= num1 +num2
    console.log(sum)
}
add();
function sum(x, y) {
    return x+y;
}
console.log(sum(4,9));
let totalone = sum(4,4)


//console.log(totalone);
 
// check if the sum is divisible y 2
if(totalone%2===0){
    console.log("Divisible");
}else{
    console.log("Not Dvisble");
}