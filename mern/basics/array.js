const superheros = ['iron man', 'spyderman', 1, 2.0, true]
console.log(superheros[0].length)

// functions
let sayhello = function (name) {
    console.log(`HI I AM SAYING HELLO TO ${name}`)
}
sayhello('chirayu')


// arraymethods
// shift and unshift are same as push and pop in start
const numbers = ['one', 'two', 'three', 'four']
numbers.shift()
console.log(numbers)
numbers.unshift('jai')
console.log(numbers)


// for end part
numbers.pop()
console.log(numbers)
numbers.push('sri')
console.log(numbers)

// at middle
numbers.splice(2, 1, 'krishna')
console.log(numbers)