const container = document.querySelector(".container");
let penColor = "black";
let isMouseDown = false;
let is16 = true;
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

clear = document.querySelector("#clear");
clear.addEventListener("click", ()=> {
    if (is16) initialize(16, 30);
    else initialize(32, 14);   
});

change = document.querySelector("#change");
change.addEventListener("click", () => {
    if(is16){
        initialize(32, 14);
        change.textContent = '16x16';
        is16 = false;
    }
    else{
        initialize(16, 30)
        change.textContent = '32x32';
        is16 = true;
    }
})

function initialize(n, h){
    container.innerHTML = '';
    for(let j = 0; j<n; j++)
    {
        const line = document.createElement("div");
        line.classList.add("line");
        for(let i = 0; i<n; i++)
            {
                const rect = document.createElement("div");
                rect.classList.add("rect");
                rect.style.height = h+'px' ;
                rect.style.width = h+'px' ;
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
}

function captureElement(filename = 'pixel-art.png') {
    const element = document.querySelector(".container");
    
    html2canvas(element, {
      allowTaint: true,    // 允许跨域图片
      useCORS: true,       // 使用 CORS
      scale: 2,            // 提高分辨率 (2倍)
      backgroundColor: null // 透明背景
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png', 1.0); // 质量 100%
      link.click();
    });
  }

initialize(16, 30);