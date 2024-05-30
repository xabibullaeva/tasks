let a = +prompt("Enter number: ")
console.log(isNaN(a));

while(isNaN(a) || a == 0){
    a = +prompt("NaN Enter another number: ")
}
if(a % 2 == 0){
    alert("Even")
    console.log("Even")
}else{
    alert("Odd")
    console.log("Odd")
}



let num1 = +prompt("Enter number son: ")
let num2 = +prompt("Enter number daraja: ")

while(isNaN(num1, num2) || num2 == 0 || num2 == 0){
    num1 = +prompt("NaN Enter another son: ")
    num2 = +prompt("NaN Enter another daraja: ")
}
    total = num1 ** num2
    alert("Your answer is " + total)
    console.log("Your answer is " + total)


