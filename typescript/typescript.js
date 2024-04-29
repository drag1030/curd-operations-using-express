"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(" it is just testing ");
var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 10));
// types of typescript annotation
var myFavNum = 10;
var myFullName = "virat";
var user = { name: "Virat", age: 30 };
// console.log( user.name );
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
addTwo(5);
getUpper("virat");
function signUpUser(name, email, isPaid) { }
signUpUser("virat", "virat@gamil.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("virat", "virat@gmail.com", false);
loginUser("v", "v@v.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
// objects
var User = {
    name: "drag",
    email: "darg@gamil.com",
    isActive: true
};
var myUser = {
    _id: "12345",
    name: "virat",
    email: "virat@gmail.com",
    isActive: false
};
myUser.email = "h@gmail.com";

