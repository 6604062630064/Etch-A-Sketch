function changeColor(e) {
    e.target.classList.add("hovered");

}

function removeColor(e) {
    e.target.classList.remove("hovered");
}

function makeGrid(size) {
    const div = document.createElement("div");
    div.classList.add("column");
    //Create a 16x16 div square

    for (i = 0; i < size; i++) {
        div.appendChild(document.createElement("div"));
    }


    for (j = 0; j < size; j++) {
        container.appendChild(div.cloneNode(true));
    }

    const boxes = document.querySelectorAll(".column > div");

    boxes.forEach((box) => {
        // Add eventlistens for both hover state and when trasition ends.
        box.addEventListener('mouseover', changeColor);
        box.addEventListener('transitionend', removeColor);
    })
}
const container = document.querySelector(".container");
const button = document.querySelector("button");

makeGrid(16);

button.addEventListener("click", (e) => {
    let newSize = 16;

    do  { 
    newSize = prompt("Specify the number of squares in each row", 16);
    } while(!(newSize <= 100 && newSize > 0))

    container.innerHTML = ""
    makeGrid(newSize);

} )
