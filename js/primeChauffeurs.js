/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
/**
 * Retourne la prime de distance perçue en fonction des kilometres parcourus
 * @param {Integer} distKm
 * @returns {Number}
 */
function primeDistance(distKm) {
    const plafond = 900;
    const primeParKm = 0.01;
    if (primeParKm * distKm >= plafond) {
        return plafond;
    } else {
        return primeParKm * distKm;
    }
}

/**
 * Retourne la prime d'anciennetée en tenant compte du bonus
 * @param {Integer} annees
 * @returns {Number}
 
 */
function primeAncien(annees) {
    const prime = 300;
    const pallier = 4;
    const bonus = 30;

    if (annees < pallier) {
        return 0;
    } else {
        return prime + bonus * (annees - pallier);
    }
}

/**
 * 
 * @param {type} primeTotale
 * @param {type} nbAccident
 * @returns {undefined}
 */
function reduction(primeTotale, nbAccident) {
    const premAcc = 0.5;
    const deuxAcc = 0.33;
    const troisAcc = 0.25;
    const quatAcc = 0.0;

    if (nbAccident === 0) {
        return primeTotale;
    } else if (nbAccident === 1) {
        return primeTotale * premAcc;
    } else if (nbAccident === 2) {
        return primeTotale * deuxAcc;
    } else if (nbAccident === 3) {
        return primeTotale * troisAcc;
    } else {
        return quatAcc;
    }
}



window.addEventListener("load", function () {
    // Déclaration de l'index de parcours
    let i;
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");
    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i = 0; i < tabInputs.length; i++) {
        // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
        tabInputs[i].addEventListener("click", calcRemu);
    }
});


function calcRemu() {
    // Déclaration des constantes
    const fixe = 1100.0;
    // Déclaration et affectation des variables
    let nbAncien = recupValeur("#num_ancien");
    let parcoursKm = recupValeur("#parcours_km");
    let nbAcc = recupValeur("#nb_accidents");
    let remuneration = fixe + reduction(primeAncien(nbAncien, fixe) + primeDistance(parcoursKm), nbAcc);
    // Affichage du résultat
    afficheRemu(remuneration);
}

/**
 * Fonction qui retourne un entier depuis une valeur prise dans le DOM
 *
 * @param {String} id
 * @return {integer}
 */
function recupValeur(id) {
    return parseInt(window.document.querySelector(id).value);
}


/**
 * Fonction qui affiche la rémunération dans l'élément d'id "remuneration"
 *
 * @param {type} nombre
 * @return {undefined}
 */
function afficheRemu(nombre) {
    window.document.querySelector("#remuneration").innerHTML =
            "La rémunération sera de : " + nombre + " €";
}

