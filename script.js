const select = document.getElementById("select");
const color = document.getElementById("color");
const figure = document.getElementById("figure");

figure.style.backgroundColor = color.value;

select.addEventListener("change", () => {
    figure.className = ""
    figure.classList.add(select.value);
})

color.addEventListener("change", () => {
    figure.style.backgroundColor = color.value;
    console.dir(color.value);
})


// select.addEventListener("change", () => {
//     if(select.value == "rectangle") {
//         figure.style.width = "150px";
//         figure.style.borderRadius = "0%"
//     } else if(select.value == "circle") {
//         figure.style.width = "100px";
//         figure.style.borderRadius = "50%"
//     } else if(select.value == "square") {
//         figure.style.width = "100px";
//         figure.style.borderRadius = "0%"
//     }
//     console.dir(select.value);
// })