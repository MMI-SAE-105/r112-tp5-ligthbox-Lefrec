//verifie si le script est bien connecté direct
console.log("connected");


//déclaration des constantes avec les querySelector
//console.log pour vérifier que tout fonctionne
const lightBox = document.querySelector("#lightbox");
console.log(lightBox);

const lightBoxImg = document.querySelector("#lightbox>img");
console.log(lightBoxImg);

const lightBoxAnimal = document.querySelector("#lightbox>p");
console.log(lightBoxAnimal);

const smallImg = document.querySelectorAll("li>img");
console.log(smallImg);


//ajout d'un listener sur chaque miniature qui change l'image de la ligthbox et ouvre la lightbox
smallImg.forEach(element => {
    element.addEventListener("click", () => {
        lightBoxImg.src = element.dataset.fullImg;
        lightBoxAnimal.textContent = element.dataset.animal
        lightBox.showModal()
        lightBox.classList.toggle("open", true);
    })
});


//listener qui ferme la lightbox
lightBox.addEventListener("click", () => {
    lightBox.close();
    lightBox.classList.toggle("open", false);
});