// ================================================
// register js

let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let emailSign = document.getElementById('emailSign')
let passwordSign = document.getElementById('passwordSign')
let form = document.getElementById('form')
let form_sign = document.getElementById('form-sign')

let data = []   
let res = JSON.parse(localStorage.getItem("data"))
const register = () => {
    if (name.value !== "" && email.value !== "" && password.value !== "") {
        if (localStorage.getItem("data")) {
            let res = JSON.parse(localStorage.getItem("data"))
            res.forEach(elem => {
                data.push(elem)
            });
            let person = {
                name: name.value,
                email: email.value,
                password: password.value
            }
            data.push(person)
            if (res !== null ? res.some(elem => elem.email == email.value) : false) {
                email.style.border = "2px solid red"
                data = []
            } else {
                localStorage.setItem("data", JSON.stringify(data))
                data = []
                name.value = ""
                email.value = ""
                password.value = ""

            }
        } else {
            let person = {
                name: name.value,
                email: email.value,
                password: password.value
            }
            data.push(person)
            if (res !== null ? res.some(elem => elem.email == email.value) : false) {
                email.style.border = "2px solid red"
                data = []

            } else {
                localStorage.setItem("data", JSON.stringify(data))
                alert("You have successfully logged out !")
                data = []
                name.value = ""
                email.value = ""
                password.value = ""
            }
        }

    } else {
        if (name.value == "") {
            name.style.border = "2px solid red"
        }
        if (email.value == "") {
            email.style.border = "2px solid red"
        } if (password.value == "") {
            password.style.border = "2px solid red"
        }
    }
}

const auto = () => {
    name.style.border = "2px solid #4C6FFF"
    email.style.border = "2px solid #4C6FFF"
    password.style.border = "2px solid #4C6FFF"
    passwordSign.style.border = "2px solid #4C6FFF"
    emailSign.style.border = "2px solid #4C6FFF"
}

const registerSign = () => {
    // res.forEach(elem => {
    //       if (elem.email ==  emailSign.value && elem.password == passwordSign.value) {
    //         alert("o'tingiz")
    //     } else {
    //         passwordSign.style.border = "2px solid red"
    //         emailSign.style.border = "2px solid red"

    //         // if (res !== null ? res.some(elem => elem.password !== passwordSign.value) : []) {
    //         //  
    //         // }
    //     }
    // });8600490470430356 
    if (res !== null ? res.some(elem => elem.password == passwordSign.value && elem.email == emailSign.value) : []) {
        location.href = "../conponets/dashboard/index.html";
        passwordSign.style.border = "2px solid #4C6FFF"
        emailSign.style.border = "2px solid #4C6FFF"
    } else {
        if (res !== null ? res.some(elem => elem.password !== passwordSign.value) : []) {
            passwordSign.style.border = "2px solid red"
            emailSign.style.border = "2px solid red"
        }
    }
}


const yopil = () => {
    form.style.display = "none"
    form_sign.style.display = "block"

}
const ochil = () => {
    form_sign.style.display = "none"
    form.style.display = "block"
}