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

