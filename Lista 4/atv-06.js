 const prompt = require("prompt-sync")()
 var number = Number(prompt("Qual é o número?"))
 for (var i = 0; i < number; i++) {
 if (number != 0){
     rest = number % 2
     number = Number(number / 2)
     console.log(`${number} : 2 = ${number / 2} e o resto ${rest}`)
     }
    }
  
  

