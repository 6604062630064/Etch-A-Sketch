function changeColor(e) {
   e.target.classList.add("hovered");

}

function removeColor(e) {
    e.target.classList.remove("hovered");
}



const container = document.querySelector(".container");
const div = document.createElement("div");

div.classList.add("column");

console.log(container);

for (i = 0; i < 16; i++){
    div.appendChild(document.createElement("div"));
}


for (j = 0; j < 16; j++){
    container.appendChild(div.cloneNode(true));
}

const boxes = document.querySelectorAll(".column > div");

boxes.forEach((box) => {
    box.addEventListener('mouseover', changeColor);
    box.addEventListener('transitionend', removeColor);
})

