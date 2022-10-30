'use strict' // signale à l'emulateur javascript d'uti:liser le mode strict autrement dit si une variable n';est pas declarer au prealable , => erreur

/**
 *  Ajouter un event sur plusieurs elements  
*/ 

const addEventOnElements = function (elements, eventType,callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType,callback);        
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


/**
 * TEXT ANIMATION EFFECT HERO
 */

const letterBoxes = document.querySelectorAll("[data-letter-effect");
let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {
    
    // Loop 
    for (let i = 0; i < letterBoxes.length; i++) {
        // set initial animation delay

        let letterAnimationDelay = 0;

        // get all characters
        const letters = letterBoxes[i].textContent.trim();

        //remove all chara 
        letterBoxes[i].textContent =  "";

        // loop
        for (let j = 0; j < letters.length; j++) {
            const span = document.createElement("span");

            // set animation delay on span
            span.style.animationDelay = letterAnimationDelay +'s';

            if ( i === activeLetterBoxIndex) {
                span.classList.add("in");
            }else{
                span.classList.add("out");
            }


            span.textContent = letters[j];

            if(letters[j] === " "){
                span.classList.add("space");
            } 

            letterBoxes[i].appendChild(span);
            if (j>=letters.lenght-1) break;

            letterAnimationDelay +=0.05;
            
        }

        if (i === activeLetterBoxIndex) {
            totalLetterBoxDelay =  Number(letterAnimationDelay.toFixed(2));
        }

        if( i === lastActiveLetterBoxIndex){
            letterBoxes[i].classList.add("active");

        }else{
            letterBoxes[i].classList.remove("active");
        }

    }

    setTimeout(() => {
       lastActiveLetterBoxIndex = activeLetterBoxIndex;
       
       activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex =0 : activeLetterBoxIndex++;

       setLetterEffect();

    }, (totalLetterBoxDelay * 1000) + 3000);
}   


window.addEventListener('load', setLetterEffect); 

