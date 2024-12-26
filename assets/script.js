const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0; // Initialisation de l'index de l'image affichée
const imageElement = document.getElementById("image_banner"); // Sélection de l'image
const tagLineElement = document.getElementById("tagline"); // Sélection de la tagline


// Fonction pour mettre à jour l'image et le texte du carrousel
function updateCarousel() {
	imageElement.src = slides[i].image; // Met à jour l'attribut 'src' de l'élément image
	tagLineElement.innerHTML = slides[i].tagLine; // Met à jour le contenu HTML de l'élément tagline

}

// Initialisation du carrousel
updateCarousel();

//Evenement boutons
let buttonLeft = document.querySelector(".arrow_left")
buttonLeft.addEventListener("click", () => {
	i = i - 1
	updateCarousel() 
});

let buttonRight = document.querySelector(".arrow_right")
buttonRight.addEventListener("click", () => {
	i = i + 1
	updateCarousel() 
});
