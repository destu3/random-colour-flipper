const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let firstColor = randomHexValue();
    let secondColor = randomHexValue();
    document.body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`
    color.textContent = `${firstColor}, ${secondColor}`;
});

function randomHexValue(){
    
    let hexValue = "#"; 
    
    for(i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * hex.length);
        hexValue += hex[randomNumber];
    }
    return hexValue;
};