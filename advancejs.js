import  Great  from "./library.js";
import {Greater, Gre}  from "./lib.js";

console.log("hello Silva")

// USING CLASSES IN JAVASCRIPT :

class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    greet(){
        return `Hello ${this.name}`
        
    }
}

// Using functions to achieve the same thing :


const userOne = new User('Silva', 'silva@gmail.com')
console.log(userOne.greet())

function greeter(name, email){
    return `my name is ${name}, my email is ${email}`
}
const viewUser = greeter('Silva', 'silv@gmail.com')
console.log(viewUser)


const myUser = (name, email)=>{
    return `name is ${name}, email is ${email}`
}
const Silva = myUser('silva', 'silva@gmail.com')
console.log(Silva)

// Static methods ;

class mathUtils{
    static add(a, b){
        return a + b
    }
}
console.log(mathUtils.add(3, 8));

// function to achieve the same thing :

const add= (a, b)=>{
    return a+b
}
console.log(add(4, 9));


function Add(a, c){
    return a - c
}
console.log(Add(3, 21))


class user {
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName ;
    }
}
const myName = new user('Silva')
console.log(myName.name);
const myName1 = new user('charles')
console.log(myName1.name)

// CLASS AND FUNCTIONS #NCE

class love{
    constructor(name, email, country){
        this.name = name
        this.email = email
        this.country = country
    }
    tap(){
        return `hello ${this.name},${this.email}, ${this.country}`
    }
    
}
const myLove = new love('sweetHeart', 'ane@gmail.com', 'Burundi')
console.log(myLove)

const like = (name, email, country)=>{
    return `myLike is ${name}, myMail is ${email}, country is ${country}`
}
const myLike = like('Silva Charles', 'Silva@gmail.com', 'Taiwan')
console.log(myLike)

// static methods

class myMath{
    static math(a, b){
        return a+b
    }
}
console.log(myMath.math(45, 72))

class Class {
    constructor(student, age){
        this._student = student
        this._age = age
    }
    // get student(){
    //     return this._student
    // }
    // set student(Stud){
    //    this._student = Stud
    // }
}
const classe = new Class('Silva', '30');
console.log(classe); // logs the object
// classe.student = 'Niyokindi';
// classe.student = 'charles'
// classe.student = 'claude'
// console.log(classe._student)



// INHERITANCE IN JAVASCRIPT

class Admin extends User{
    constructor(name, email, role){
        super(name, email)
        this.role = role
    }

    getRole(){
        return `Your role: ${this.role}`
    }
}

    const admin = new Admin('Charles', 'cha@gmail.com', 'superAdmin')
    console.log(admin.getRole())
    console.log(admin.greet())

    // MODULES


    console.log(Great('Charly'))
    console.log(Greater('Niyokindi'))
    console.log(Gre('Dev'))

    // Try and Catch

try{
    let num = JSON.parse('Invalid JSON')
        console.log('my code', num)
    
}catch(error){
    console.log('An error occurred :error')
}finally{
    console.log('Error handled successifully')
}
        
