import {func} from "joi";
import {valueFromASTUntyped} from "graphql/utilities";

console.log(" it is just testing " ) ;


const  sum = (a:number,b:number):number => {
    return a + b ;

}



console.log( sum( 5 , 10 ) ) ;

// types of typescript annotation

let myFavNum = 10  ;

let myFullName : string = "virat" ;

let user = { name: "Virat", age: 30 };

// console.log( user.name );




function  addTwo(num:number) {
    return num + 2

}

function getUpper(val: string) {
    return val.toUpperCase()
}

addTwo(5)

getUpper("virat")


function signUpUser (name:string , email:string, isPaid:boolean) {}

signUpUser("virat", "virat@gamil.com",false )

let loginUser = (name:string,email:string, isPaid:boolean=false) => {}

signUpUser("virat", "virat@gmail.com", false)
loginUser("v", "v@v.com")



function getValue(myVal:number) {
    if(myVal>5){
        return true
    }
    return "200 OK"
}

const getHello = (s:string):string => {
    return  ""
}

const heros = ["thor" , "spiderman", "ironman"]

heros.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void {
    console.log(errmsg);
}

function handleError(errmsg:string):void {
    throw  new Error(errmsg);
}

// objects

const User = {
    name: "drag",
    email: "darg@gamil.com",
    isActive: true
}

// function createUser({ name:string, isPaid: boolean }) {
//
// }
// createUser({name:virat, isPaid: false}
// )
//
//  type User = {
//     readonly _id: string
//     name : string;
//     email: string;
//     isActive: boolean ;
//     credcardDetails?:number
//
//  }
//
//  let myUser: User = {
//     _id: "12345" ,
//      name:"virat",
//      email: "virat@gmail.com",
//      isActive: false
// }
//
// myUser.email = "h@gmail.com"
//
//
// type cardDate = {
//     cardDate: string
// }
//
// type cardDetails = cardNumber & cardDate & {
//     cvv: number
// }
//
// const superHeros: string[] = []
// const heroPower: Array<number> = []
//
// type User = {
//     name: string
//     isActive: boolean
//
// }

// const allUsers: User[] = []
//
// superHeros.push("spiderman")
// heroPower.push(2)
//
//

let score: number | string  = 33

score = 44
score = "55"

type User = {
    name:string;
    id: number
}

type  Admin = {
    username : string;
    id: number
}

let hitesh: User | Admin = {
    name: "hitesh", id: 334
}

hitesh = {username:"hc", id: 334}

getDbId(3)
getDbId("3")

function  getDbId(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase()
    }
}