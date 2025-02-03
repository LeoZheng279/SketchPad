const container = document.querySelector(".container");
let penColor = "black";
let isMouseDown = false;
document.addEventListener("mousedown", (mouse) => {
    if (mouse.button === 0) isMouseDown = true;
})
document.addEventListener("mouseup", (mouse) => {
    if (mouse.button === 0) isMouseDown = false;
})

document.addEventListener('coloris:pick', event => {
    console.log('New color', event.detail.color);
    penColor = event.detail.color;
  });


for(let j = 0; j<16; j++)
{
    const line = document.createElement("div");
    line.classList.add("line");
    for(let i = 0; i<16; i++)
        {
            const rect = document.createElement("div");
            rect.classList.add("rect");
            rect.addEventListener("mouseenter", () =>{
                if (isMouseDown) rect.style.backgroundColor = penColor;
            })
            rect.addEventListener("mousedown", () =>{
                rect.style.backgroundColor = penColor;
            })
            line.appendChild(rect);
        }
    container.appendChild(line);
}

