//IF STATEMENT
let totalmarks = 350
let average = totalmarks / 5

console.log(average)

// 0- 100 = Grade A
if(average>=0&&average<=100){
     console.log("Grade A")
} else{
    console.log("Invalid average score") ;
}
// 0-39 = Fail
// 40-100 = Pass
if(average>0&&average<=39){
    console.log("fail");
}else if(average>=40&& average<=100){
    console.log("pass");
}else{
    console.log("invalid average score");

}
        
