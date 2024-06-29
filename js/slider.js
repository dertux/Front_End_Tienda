const slider = document.querySelector("#slider"); //obtengo el slider
let sliderSection = document.querySelectorAll(".slider-section"); //obtengo las secciones
let sliderSectionLast = sliderSection[sliderSection.length -1]; //obtengo la ultima seccion del slider

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //la ultima imagen la paso al principio pero sigo viendo la primera imagen

function Next(){ //ejecuta la funcion NEXT cambia la posicion a la derecha, significa que la primera imagen pasa al ultimo  
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);

}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

/*setInterval(function(){
    Next();
}, 7000)*/