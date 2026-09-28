const slides = document.querySelectorAll(".slide");
const points = document.querySelectorAll(".point");

let index = 0;

function changerSlide(numero) {

    slides[index].classList.remove("active");
    points[index].classList.remove("active-point");

    index = numero;
    slides[index].classList.add("active");
    points[index].classList.add("active-point");
}


points.forEach(function(point) {

    point.addEventListener("click", function() {

        const numero = Number(point.dataset.slide);

        changerSlide(numero);

    });

});


setInterval(function() {

    let suivant = index + 1;

    if (suivant >= slides.length) {
        suivant = 0;
    }

    changerSlide(suivant);

}, 8000);


function ouvrirMenu(){
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }else {
        menu.style.display = "block";
    }
}