let a = 4;
let b = 3;
let c = a + b
console.log(c);

function greet(silva) {
    return `hello, ${silva}`

    
}
console.log(greet)

console.log(document);

const myHead = document.getElementById("myHead")
console.log(myHead);

const getParagraph = document.querySelector(".myParagraph")
const changeParagraph = getParagraph.style.color = "red"
console.log(getParagraph)

const eventButton = document.getElementById('myButton');

eventButton.addEventListener('click', () => {
    alert('clicked from javascript')
})
console.log(eventButton)