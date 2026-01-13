const mainContainer = document.querySelector(".container")
const button = document.querySelector(".button")

button.addEventListener("click", () =>{
    const askSize = prompt("Write the number of squares per side (Maximun 100)");
    mainContainer.innerHTML = ""
    if(askSize <= 100){
        createDiv(askSize)
    }else{
        alert("Maximum is 100!!!!")
    }
})
function getRandomRGB(){
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}
function createDiv(size){
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div")
        const squareSize = 640 / size
        pixel.className = "pixel"
        pixel.style.width = `${squareSize}px`
        pixel.style.height = `${squareSize}px`
        pixel.style.opacity = "0.1"
        mainContainer.appendChild(pixel)
    }
    const selectPixel = document.querySelectorAll(".pixel")
    selectPixel.forEach((pixel) =>{
        pixel.addEventListener("mouseover", () =>{
            pixel.style.backgroundColor = getRandomRGB()
            let currentOpacity = parseFloat(pixel.style.opacity);
            if(currentOpacity < 1){
                pixel.style.opacity = (currentOpacity + 0.1).toString()
            }
        })
    })
}


