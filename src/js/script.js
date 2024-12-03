console.log("connected");

const lightBox = document.querySelector("#lightbox");
console.log(lightBox);

const lightBoxImg = document.querySelector("#lightbox>img");
console.log(lightBoxImg);

const smallImg = document.querySelectorAll("li>img");
console.log(smallImg);

smallImg.forEach(element => {
    element.addEventListener("click", () => {
        lightBoxImg.src = element.dataset.fullImg;
        lightBox.showModal()
    })
});

lightBox.addEventListener("click", () => {
    lightBox.close()
});