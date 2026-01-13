const mainContainer = document.querySelector(".container")
const button = document.querySelector(".button")

button.addEventListener("click", () =>{
    const askSize = prompt("Write the number of squares per side");
//     while(mainContainer.firstChild){
//         mainContainer.removeChild(mainContainer.firstChild);
//     }
    for (let i = 1; i <= parseInt(askSize); i++) {
        console.log(createDiv("blue"))
    }
})

function createDiv(color){
    const div = document.createElement("div")
    div.className = "teste"
    div.style.backgroundColor = color
    div.style = "width: 20px; height: 20px;"
    mainContainer.appendChild(div)
    div.addEventListener("mousemove", () => {
        div.style.backgroundColor = "red"
        setTimeout(() =>{
            div.style.backgroundColor = color;
        }, 500)
    })
    return div
}


