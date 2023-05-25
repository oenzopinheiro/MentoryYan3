const prompt = require("prompt-sync")()
var d = prompt("Qual é o valor de d? ")
var result = ""

for (var i = 0; d > 0; i++) {
  if(d % 2 === 1) {
  result = "1" + result
  }else{
    result = "0" + result
  }
  d = (d-(d % 2)) / 2
}
console.log(result)
