const container = document.querySelector(".container");

for(let j = 0; j<16; j++)
{
    const line = document.createElement("div");
    line.classList.add("line");
    for(let i = 0; i<16; i++)
        {
            const rect = document.createElement("div");
            rect.classList.add("rect");
            line.appendChild(rect);
        }
    container.appendChild(line);
}
