let name = "chirayu"
let age = 20
console.log(name, age)
let iamGlobal = 10
var iamlocal = 10
// it is always recomended to use "let " to declare variable unless sometimes "var "for global variables 


// KINGS PROBLEM

let king = "chirayu"
if (true) {
    let king = 'sam'
    if (true) {
        let king = 'ram'
        console.log(king)

    }
}
if (true) {
    console.log("i am second part" + king)
}


