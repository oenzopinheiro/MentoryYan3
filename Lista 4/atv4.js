var b = "1100100"
var result = 0

for (var i = 0; i < b.length; i++) {
    if (b[b.length - 1 - i] == "1") {
    result = result + (2 ** i)
  }
}
console.log(result)