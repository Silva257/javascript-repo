// console.log(greet)

console.log(document);

const myHead = document.getElementById("myHead").style.color = "green"


const getParagraph = document.querySelector(".myParagraph")
getParagraph.style.color = "blue"

const eventButton = document.getElementById('myButton');

eventButton.addEventListener('click', () => {
    // alert('clicked from javascript');
     getParagraph.style.color = "purple";
     getParagraph.style.fontSize = "25px";
     getParagraph.textContent = "Clicked from javascript"

})
console.log(eventButton)

const buttonT = document.querySelector(".buttonTwo")

buttonT.addEventListener('click', ()=>{
    // alert('Another click made');
    getParagraph.style.color = "darkcyan";
    getParagraph.style.fontSize = "20px";
    getParagraph.textContent = 'Another click'

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
const toggle = ()=>{
    box.classList.toggle('highlight')
}

// CREATING NEW ELEMENT IN THE DOCUMENT: 

const myContainer = document.getElementById('container')
const myBtn = document.getElementById('btn')

myBtn.addEventListener('click', ()=>{
    const newElement = document.createElement('h2')
    newElement.textContent = 'New element.'
    document.body.appendChild(newElement)
    
})

// FORM INTERRACTIONS :

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
const list = document.getElementById('todolist')
const input = document.getElementById('todoinp')
const todobut = document.getElementById('todoButton')
const todoForm = document.getElementById('todoId')


// Add todo item on button click

todobut.addEventListener('click', () => {

    // const newElement = document.createElement('li'); // Create new li element
    // newElement.textContent = input.value; // Set text content from input
    // list.appendChild(newElement); // Append new li to the ul
    // input.value = ''; // Clear input field

    if(input.value.trim()===""){
        alert("please add a todo item");
        return;
        // newElement.textContent = ""
    }
    const newElement = document.createElement('li'); // Create new li element
    newElement.textContent = input.value; // Set text content from input
    list.appendChild(newElement); // Append new li to the ul
    input.value = ''; // Clear input 
});

// Prevent form submission
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
});





