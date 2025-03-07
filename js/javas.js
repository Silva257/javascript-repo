// let a = 4;
// let b = 3;
// let c = a + b
// console.log(c);

// function greet(silva) {
//     return `hello, ${silva}`

    

// console.log(greet)

console.log(document);

const myHead = document.getElementById("myHead")
console.log(myHead);

const getParagraph = document.querySelector(".myParagraph")
const changeParagraph = getParagraph.style.color = "red"
console.log(getParagraph)

const eventButton = document.getElementById('myButton');

eventButton.addEventListener('click', () => {
    // alert('clicked from javascript');
     getParagraph.style.color = "blue";
     getParagraph.style.fontSize = "25px";
     getParagraph.textContent = "first click"

})
console.log(eventButton)

const buttonT = document.querySelector(".buttonTwo")

buttonT.addEventListener('click', ()=>{
    // alert('Another click made');
    getParagraph.style.color = "green";
    getParagraph.style.fontSize = "40px";
    getParagraph.textContent = "Second click"

})

// CHANGING A PARAGRAPH BY UPDATING A FORM :

const myFormO = document.getElementById('myForm')
const myInputO = document.getElementById('myInput')
const myButtonO = document.getElementById('myButton')
const parag = document.getElementById('myParagraph')

myFormO.addEventListener('submit', (e)=>{
  e.preventDefault();
  parag.textContent = myInputO.value;
  myInputO.value = ''
})

// ADDING AND REMOVING HIGHLIGHTS IN JAVASCRIPT DYNAMICALLY :

const box = document.getElementById('myBox')

function highlight(){
    box.classList.add('highlight')
}
function toggle(){
    box.classList.toggle('highlight')
}

// CREATING NEW ELEMENT IN THE DOCUMENT: 

const myContainer = document.getElementById('container')
const myBtn = document.getElementById('btn')

myBtn.addEventListener('click', ()=>{
    const newElement = document.createElement('div')
    newElement.textContent = 'hello javascript.'
    document.body.appendChild(newElement)
    
})
const validateInput = document.getElementById('myInp')

const myValidButton = document.getElementById('sButton')

const myValidForm = document.getElementById('formThree')


myValidButton.addEventListener('click', ()=>{
    if(validateInput.value.trim()===""){
        alert('Fill the field')
    }
    myValidForm.addEventListener('submit', (e)=>{
        e.preventDefault()
    })
})