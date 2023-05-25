 const prompt = require("prompt-sync")()
 var n = Number(prompt("Qual é o valor N? "))
 var sum = 0
 var numberPrevious = 0
 var numberNext = 1

 for(var i = 0; i < n; i++) {
    numberPrevious = numberNext
    numberNext = sum
      sum = numberPrevious + numberNext     
      console.log(numberPrevious, ` + ` +  numberNext, ` = ` + sum)
 }
 

