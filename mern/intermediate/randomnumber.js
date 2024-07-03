let n = 22
let m = 7
result = n / m
console.log(result.toFixed(2))
console.log(Math.floor(result))
console.log(Math.ceil(result))
console.log(Math.ceil(Math.random() * 10))


//DICE GAME
let upper = 6
let lower = 1
let myrandom = Math.floor(Math.random() * (upper - lower + 1)) + lower
console.log(myrandom)