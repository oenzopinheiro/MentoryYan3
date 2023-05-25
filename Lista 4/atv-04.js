const prompt = require("prompt-sync")()
var numberOfEmployees = Number(prompt("Qual é o valor de N? "))
var count1 = 0
var count2 = 0

for(var i = 0; i < numberOfEmployees; i++) {
    var name = prompt("Qual é o nome do funcionario? ")
var currentWage = Number(prompt("Qual é o salário atual do funcionario? "))
var newWage = 0
if (currentWage >= 0 && currentWage <= 150) {
    newWage = currentWage * 0.25 + currentWage
} else if (currentWage >= 150 && currentWage <= 300) {
    var newWage = currentWage * 0.20 + currentWage

} if (currentWage >= 300 && currentWage <= 600) {
    newWage = currentWage * 0.15 + currentWage
} if (currentWage >= 600) {
    newWage = currentWage * 0.10 + currentWage
} 
count1 = newWage + count1
count2 = currentWage + count2
console.log(`Seu nome é ` + name,`, seu salário atual é `+ currentWage, `, e seu salário novo é `+ newWage,`.`)
}
if(count2 < count1) {
    difference = count1 - count2
    
} else {
    difference = count2 - count1
} 


console.log(`A soma dos sálarios atuais são ${count2}`)
console.log(`A soma dos sálarios novos são ${count1}`)
console.log(`A diferença entre os sálarios é `+ difference)
console.log(`E a média aritimética é` +  count2/numberOfEmployees)