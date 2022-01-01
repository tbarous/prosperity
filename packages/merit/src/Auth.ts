const SHA256 = require("crypto-js/sha256");

function randomString(length = 12) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var result = '';

    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

    return result;
}

const users = [
    {
        firstname: "tasos",
        lastname: "barous",
        email: "tasos@example.com",
        password: SHA256("123").toString()
    },
    {
        firstname: "foufoutos",
        lastname: "foufoutakis",
        email: "foufoutos@example.com",
        password: SHA256("345").toString()
    }
]

interface ICookies {
    [x: string]: string
}

const cookies: ICookies = {}

interface User {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

class Auth {
    register(firstname: string, lastname: string, email: string, password: string) {
        const user = users.find((u: User) => email === u.email);

        if (!user) {
            users.push({firstname, lastname, email, password: SHA256(password).toString()})
        }

        console.log(users)
    }

    login(email: string, password: string) {
        const user = users.find((u: User) => u.password === SHA256(password).toString() && u.email === email);

        if (!user) {
            console.error("Invalid login!");

            return;
        }

        console.log("Successful login");

        const _randomString = randomString();

        const cookie = SHA256(_randomString).toString();

        cookies[cookie] = email;

        return _randomString;
    }

    check(cookie: string) {
        if (cookies[SHA256(cookie).toString()]) {
            console.log('You are ok');

            return;
        }

        console.log('Nah');
    }
}

const auth = new Auth();
auth.register("t", "b", "d@fe.com", "12345")
const cookie = auth.login("d@fe.com", "12345")
auth.check(cookie || "11");

export default Auth;