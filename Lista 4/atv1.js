var target = 4
var array = [1,3,5]
let indexes = []

for(let i = 0; i < array.length; i++) {
  for(let j = 1; j < array.length; j++) {
    if(array[i] + array[j] === target) {
        indexes = [i, j]
    }
  }
}

console.log(indexes); 