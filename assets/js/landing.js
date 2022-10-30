'use strict' // signale à l'emulateur javascript d'uti:liser le mode strict autrement dit si une variable n';est pas declarer au prealable , => erreur

/**
 *  Ajouter un event sur plusieurs elements  
*/ 

const addEventOnElements = function (elements, eventType,callback) {
    for (let index = 0; index < elements.length; index++) {
        elements[index].addEventListener(eventType,callback);        
    }
}


/**
 * PRELODING
 */

const loadingElement = document.querySelector('[data-loading');

window.addEventListener('load', function () {
    loadingElement.classList.add("loaded");
    document.body.classList.remove('active');
})

/**
 * MOBILE NAVBAR 
*/

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);



