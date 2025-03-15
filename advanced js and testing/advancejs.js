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
    return a * c
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