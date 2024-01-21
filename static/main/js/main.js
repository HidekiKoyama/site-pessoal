
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("background-name").style.fontSize = "600px";
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    const carouselTexts = document.querySelectorAll(".carousel-text");
    let currentIndex = 0;
    var gAnimation = true; // Definindo como true inicialmente

    function showNextText() {
        if (gAnimation) {
            carouselTexts[currentIndex].classList.remove("visible");
            currentIndex = (currentIndex + 1) % carouselTexts.length;
            carouselTexts[currentIndex].classList.add("visible");
            console.log("currentIndex: " + currentIndex);
        }
    }

    if (gAnimation) {
        setInterval(showNextText, 3000);
    }

    document.addEventListener("scroll", function () {
        var currentPosition = window.scrollY;
        
        if (currentPosition < 500) {
            console.log("O usuário está na parte superior da página");
            gAnimation = true;

        } else if (currentPosition >= 500 && currentPosition < 1000) {
            gAnimation = false;
            console.log("O usuário está na segunda parte da página");
        } else {
            gAnimation = false;
            console.log("O usuário está em uma parte posterior da página");
        }
    });
});
