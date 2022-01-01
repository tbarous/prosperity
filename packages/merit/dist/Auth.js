"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SHA256 = require("crypto-js/sha256");
function simpleDecorator(constructor) {
    console.log("simpleDecorator called");
}
function randomString(length) {
    if (length === void 0) { length = 12; }
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = '';
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
var users = [
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
];
var cookies = {};
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.register = function (firstname, lastname, email, password) {
        var user = users.find(function (u) { return email === u.email; });
        if (!user) {
            users.push({ firstname: firstname, lastname: lastname, email: email, password: SHA256(password).toString() });
        }
        console.log(users);
    };
    Auth.prototype.login = function (email, password) {
        var user = users.find(function (u) { return u.password === SHA256(password).toString() && u.email === email; });
        if (!user) {
            console.error("Invalid login!");
            return;
        }
        console.log("Successful login");
        var _randomString = randomString();
        var cookie = SHA256(_randomString).toString();
        cookies[cookie] = email;
        return _randomString;
    };
    Auth.prototype.check = function (cookie) {
        if (cookies[SHA256(cookie).toString()]) {
            console.log('You are ok');
            return;
        }
        console.log('Nah');
    };
    return Auth;
}());
var auth = new Auth();
auth.register("t", "b", "d@fe.com", "12345");
var cookie = auth.login("d@fe.com", "12345");
auth.check(cookie || "11");
exports.default = Auth;
