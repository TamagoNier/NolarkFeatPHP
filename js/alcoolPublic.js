/**
 * Function qui retourne l'alcool pur ingéré en function du
 * nombre de verres
 * 
 * @param {int} nbVerres
 * @returns {int}
 */
function getAlcoolPur(nbVerres) {
    return nbVerres * 10;
}

/**
 * Ponction qui donne le coeficien de diffusion en fonction du sexe
 * 
 * @param {String} sexe
 * @returns {float}
 */
function getCoefDiffusion(sexe) {
    if (sexe === 'homme') {
        return 0.7;
    } else {
        return 0.6;
    }
}

/**
 * Fonction qui retourne l'alcoolemie en fonction du sexe, du poids
 * et du nombre de verres ingérés
 * 
 * @param {string} sexe
 * @param {int} poids
 * @param {int} nbVerres
 * @returns {float}
 */
function getAlcoolemie(sexe, poids, nbVerres) {
    // /!\ division par 0 ! on ne veut pas casser la matrice 
    if (poids > 0) {
        return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
    } else {
        return 0; //A changer peut-etre 
    }
}

/**
 * Fonction qui retourne l'amende encourue en fonction de l'alcoolémie
 * 
 * @param {float} alcoolemie
 * @returns {String}
 */
function getAmende(alcoolemie) {
    const seuilDelit = 0.8;
    const seuilContra = 0.5;
    if (alcoolemie < seuilContra) {
        return "Pas d'amande.";
    } else if (alcoolemie < seuilDelit) {
        return 'Minorée : 90€ / Forfaitaire : 135€ / Majorée : 375€.';
    } else {
        return '4500€.';
    }
}

/**
 * Fonction qui retourne la sanction encourue en fonction de l'alcoolémie
 * 
 * @param {float} alcoolemie
 * @returns {String}
 */
function getSanction(alcoolemie) {
    const seuilDelit = 0.8;
    const seuilContra = 0.5;
    if (alcoolemie < seuilContra) {
        return 'Pas de sanction, bravo !';
    } else if (alcoolemie < seuilDelit) {
        return '6 points + suspension 3 ans';
    } else if (alcoolemie > seuilDelit) {
        return '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation';
    }
}

/**
 * Fonction qui retourne une valeure entiere recuperee via
 * window.document.querySelector(id)
 * 
 * @param {type} id
 * @returns {integer}
 */
function getInt(id) {
    let valeur = parseInt(getString(id));
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}

/**
 * Fonction qui retourne un string récupéré dans un champ via son id
 *
 * @param {string} id
 * @returns {string}
 */
function getString(id) {
    return window.document.querySelector(id).value;
}

window.addEventListener("load", function () {
    window.addEventListener('reset', function () { //"Ecoute" le site afin de détécter si le form à été reinitialisé
        window.document.querySelector('#consequances').remove();
        window.document.querySelector('#sensibilisation').remove();

    });

    // tabEvents est une collection d'évenements
    let tabEvents = ['keyup', 'click'];
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('input[type="number"]');
    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for (let j = 0; j < tabEvents.length; j++) {
            // Ajout des listeners sur tous les <input> des events listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], getConsequance);
        }
    }
});

function getConsequance() {
    let poids = getInt("#num_poids");
    let nbVerres = getInt("#nb_verres");
    let alcool;

    if (document.getElementById('rd_sexehomme').checked) {
        alcool = getAlcoolemie("homme", poids, nbVerres);

    } else if (document.getElementById('rd_sexefemme').checked) {
        alcool = getAlcoolemie("femme", poids, nbVerres);
    }
    let amande = getAmende(alcool);
    let sanction = getSanction(alcool);

    gestionAffichageConsequances(amande, sanction);
}

function gestionAffichageConsequances(amande, sanction) {
    let premElH2 = window.document.querySelector('#consequances');//creation de #consequances si il n'existe pas deja 

    let deuxElH2 = window.document.querySelector('#sensibilisation');//creation de #sensibilisation si il n'existe pas deja 

    if (!premElH2) {
        premElH2 = window.document.createElement('h2');
        premElH2.id = 'consequances';
        window.document.querySelector('#formulaire').appendChild(premElH2);
    }
    if (!deuxElH2) {
        deuxElH2 = window.document.createElement('h2');
        deuxElH2.id = 'sensibilisation';
        window.document.querySelector('#formulaire').appendChild(deuxElH2);
    }

    premElH2.innerHTML = sanction + "\n" + amande + "\nCependant l'alcool au volant nous affecte tous";
    deuxElH2.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/5ZO5Hv47UJc" \n\
title="YouTube video player" \n\
frameborder="0" allow="accelerometer; \n\
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}