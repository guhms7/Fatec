num1 = parseInt(prompt('Entre com um numero:> '))
num2 = parseInt(prompt('Entre com um numero:> '))
sum = 0 
if (num1 >= num2) {
  while (num2 <= num1) {
    console.log(num2)
    sum = num2 + sum 
    num2 += 1
  }

} else {
  while (num1 <= num2) {
    console.log(num1)
    sum = num1 + sum 
    num1 += 1
  }
}
console.log("Somatoria: "+sum);