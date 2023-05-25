const prompt = require("prompt-sync")()

var n = Number(prompt("Qual é o valor N? "))
var count = 0
var count1 = 0
 
for (var i = 0; i <= n; i++) {
if (i % 1 == 0 ) {
    console.log(i)
    count = count + n 
} var mean = ((n + 1) / 2 )  
count1 = count1 + i
}
console.log(`E sua média aritimética é ` + mean + ` E sua soma é: ` + count1)


