// EX #1
    let sum: number = 0
    for(let i = 0 ; i < 1000 ; i++){
    if(i % 3 == 0 || i % 5 == 0){
        sum += i
    }}

console.log(sum)


// EX #2
let firstNumber: number = 0
let secondNumber:number= 1
let sumNumber: number = 0
let evenNumber : number = 0

while(sumNumber < 4000000){
    sumNumber = firstNumber + secondNumber
    firstNumber = secondNumber 
    secondNumber = sumNumber
    if(sumNumber % 2 == 0){
        evenNumber = evenNumber + sumNumber
    }
}
console.log(evenNumber)