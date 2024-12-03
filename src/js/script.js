console.log("connected");

const lightBox = document.querySelector("#lightbox");
console.log(lightBox);

const smallImg = document.querySelectorAll("li>img");
console.log(smallImg);

smallImg.forEach(element => {
    element.addEventListener("click", () => {
        lightBox.showModal()
    })
});

lightBox.addEventListener("click", () => {
    lightBox.close()
});