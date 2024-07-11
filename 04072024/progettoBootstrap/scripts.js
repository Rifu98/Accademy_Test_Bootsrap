
document.getElementById('cercaIcona').addEventListener('click', () => {
    if (document.querySelector('#cercaCampo').style.display == 'inline') {
        document.querySelector('#cercaCampo').style.display = 'none';
    } else {
        document.querySelector('#cercaCampo').style.display = 'inline'
    }
});
document.getElementById('tornaSu').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

var elemento = document.querySelector('footer');
var siHover = document.querySelector('#siHover');
var noHover = document.querySelector('#noHover');
elemento.addEventListener('mouseenter', () => {
    siHover.style.display = "block";
    noHover.style.display = "none";
});

elemento.addEventListener('mouseleave', () => {
    siHover.style.display = "none";
    noHover.style.display = "block";
});


var ott = document.querySelector('#ott');
var nov = document.querySelector('#nov');
var dic = document.querySelector('#dic');
var ottEv = document.querySelector('#ottobre');
var novEv = document.querySelector('#novembre');
var dicEv = document.querySelector('#dicembre');

document.addEventListener('DOMContentLoaded', () => {
    // Il codice qui verrà eseguito quando la pagina viene caricata o ricaricata
    ottEv.style.display = "none";
    novEv.style.display = "none";
    dicEv.style.display = "block";
    dicEv.classList.add('show');
});

ott.addEventListener('click', () => {
    novEv.classList.remove('show');
    dicEv.classList.remove('show');
    setTimeout(() => {
        novEv.style.display = "none";
        dicEv.style.display = "none";
        ottEv.style.display = "block";
        setTimeout(() => {
            ottEv.classList.add('show');
        }, 20);
    }, 500);
});

nov.addEventListener('click', () => {
    ottEv.classList.remove('show');
    dicEv.classList.remove('show');
    setTimeout(() => {
        ottEv.style.display = "none";
        dicEv.style.display = "none";
        novEv.style.display = "block";
        setTimeout(() => {
            novEv.classList.add('show');
        }, 20);
    }, 500);
});

dic.addEventListener('click', () => {
    ottEv.classList.remove('show');
    novEv.classList.remove('show');
    setTimeout(() => {
        ottEv.style.display = "none";
        novEv.style.display = "none";
        dicEv.style.display = "block";
        setTimeout(() => {
            dicEv.classList.add('show');
        }, 20);
    }, 500);
});