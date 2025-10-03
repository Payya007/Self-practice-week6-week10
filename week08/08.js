const box = document.getElementById('box');
const button = document.getElementsByTagName('button');
console.log(button)
console.log(Array.from(button))
console.log(box)
Array.from(button).forEach((button) => {
    button.addEventListener(('click'),() =>{
        box.style.backgroundColor = button.getAttribute("data-color")
        box.textContent = button.getAttribute("data-color").toUpperCase();
    })
})
