let usermail = 'ufhail.com'
let password = '1234'

let mailcheck = function (mystring) {
    if (mystring.includes("@") && mystring.includes(".com")) {
        return `mail name  is valid`
    } else {
        return `mail name is invalid`
    }

}

console.log(mailcheck(usermail))
