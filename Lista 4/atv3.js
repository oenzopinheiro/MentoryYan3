var s = "IV"
var romanValues = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
var result = 0
for(var i = 0; i < s.length; i++) {
    var currentValue = romanValues[s[i]]
    var nextValue = romanValues[s[i+1]]
    if (nextValue && nextValue > currentValue) {
        result = result + nextValue - currentValue
    } else  {
        result = result + currentValue
    }
   
} 
console.log(result)
