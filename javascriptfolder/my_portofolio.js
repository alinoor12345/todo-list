// write aprogramthat displays all prime nubers between 1and 200,
for (let num = 2; num <= 200; num++) {
     if (num % 2 !==0 || num === 2) {
       if (num % 3!== 0 || num === 3) {   
        if (num % 5 !== 0 || num === 5) {
                if (num % 7 !== 0 || num === 7) {
                    console.log(num)
                }
            }
       }
     }
    }

// write a program that prompts the user to input hi/her age in years and 
let ageInYears = 13
let ageInDays = ageInYears * 365

if(ageInYears > 0){
    console.log(ageInDays)
}
else{
     console.log("Not a valid age") 
}
   
// returns the age in days. use 365 days as the length of a year (as we
// would like to ignore leap years). Only accepts positive numbers
