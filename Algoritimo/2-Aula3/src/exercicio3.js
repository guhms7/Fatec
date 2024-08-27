num1 = 2//parseInt(prompt('Entre com um numero:> '))
num2 = 10//parseInt(prompt('Entre com o valor maior:> '))

if (num1 >= num2) {
  while (num2 <= num1) {
    console.log(num2)
    num2 += 1
  }
} else {
  while (num1 <= num2) {
    console.log(num1)
    num1 += 1
  }
}