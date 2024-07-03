let grade = 88
grader(grade)

function grader(grade) {
    if (grade > 90) {
        console.log('A')
    } else if (grade > 80) {
        console.log('B')
    } else if (grade > 50) {
        console.log('c')
    } else {
        console.log('fail')
    }

}