const root = document.documentElement;
console.log(root);  // <html>...</html>


const divElement = document.firstChild
console.log(typeof(divElement))

if(document.firstChild.nodeType){
    console.log("Hello , HTML node")
}
else{
    console.log("Hello ,any node")

}
 
const pDiv = document.documentElement.children[1].children[0];  // 1 คือ body   และ  0 คือ ตัวแรก เจอ div เลย 
console.log(pDiv);  // เจอ div ดิ
const pText = document.documentElement.children[1].children[0].children[0]; // 0 คือ ตัวแรก เจอ p เลย
console.log(pText);  // เจอ p ดิ

 const pElement = document.createElement("p");
pElement.setAttribute("format", "italic");
document.getElementById("demo").appendChild(pElement);

const base = document.createElement("i");

const inHtml = base.cloneNode();
inHtml.innerHTML = "Sample Italic text ";
pElement.appendChild(inHtml);

const inText = base.cloneNode();
inText.innerText = "Sample Italic text ";
pElement.appendChild(inText);

const textCon = base.cloneNode();
textCon.textContent = "Sample Italic text ";
pElement.appendChild(textCon);อ    