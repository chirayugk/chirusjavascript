const todo = []
todo.push("do leetcode")
todo.push("do web dev")
todo.push("exersise")
todo.push("yoga")
todo.forEach(function (todo, i) {
    console.log(`your ${i + 1} task is ${todo}\n`)
})



const todolist = []
todolist.unshift("leetcode")
todolist.unshift("do web dev")
todolist.unshift("exersise")
todolist.unshift("yoga")
for (let j = 1; j <= todolist.length; j++) {
    console.log(`your ${j} task is ${todolist[j]}`)
}