const element = document.querySelector('#main');
element.remove(); 

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");
newHeader.textContent = " ENES is the champion";