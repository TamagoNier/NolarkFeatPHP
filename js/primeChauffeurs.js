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

    /*if (nbAccident === 0) {
     return primeTotale;
     } else if (nbAccident === 1) {
     return primeTotale * premAcc;
     } else if (nbAccident === 2) {
     return primeTotale * deuxAcc;
     } else if (nbAccident === 3) {
     return primeTotale * troisAcc;
     } else {
     return quatAcc;
     }*/
    if (nbAccident > 3) {
        return 0.0;
    } else {
        return primeTotale / (1 + nbAccident);
    }
}



window.addEventListener("load", function () {

    // tabEvents est une collection d'évenements
    let tabEvents = ['keyup', 'click'];
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('input[type="number"]');
    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for (let j = 0; j < tabEvents.length; j++) {
            // Ajout des listeners sur tous les <input> des events listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], calcRemu);
        }
    }
    // Gestion de l'input de type range (recopie de la valeur dans l'output)
    window.document.querySelector('#nb_accidents').addEventListener('change', function () {
        window.document.querySelector('#o_nb_accidents').value =
                recupValeur('#nb_accidents');
        calcRemu();
    });
});


function calcRemu() {
    // Déclaration des constantes
    const fixe = 1100.0;
    // Déclaration et affectation des variables
    let nbAncien = recupValeur("#num_ancien");
    let parcoursKm = recupValeur("#parcours_km");
    let nbAcc = recupValeur("#nb_accidents");
    let primeAnnuelleSansAccident = reduction(primeDistance(parcoursKm) +
            primeAncien(nbAncien), 0);
    let primeAnnuelle = reduction(primeDistance(parcoursKm)+
            primeAncien(nbAncien), nbAcc);
    // Gestion de l'affichage de la prime en fonction du nombre d'accidents
    gestionNbAccidents(nbAcc, primeAnnuelleSansAccident, primeAnnuelle);

}


/**
 * Procédure qui gère l'affichage en fonction du nombre d'accidents
 *
 * @param {integer} nbAccidents
 * @param {float} primeAnnuelleSansAccident
 * @param {float} primeAnnuelle
 * @returns {void}
 */
function gestionNbAccidents(nbAccidents, primeAnnuelleSansAccident, primeAnnuelle) {
    let elH2 = window.document.querySelector('#remuneration');
    // Si #remuneration (<h2 id='remuneration'></h2>) n'existe pas, on le créé
    if (!elH2) {
        elH2 = window.document.createElement('h2');
        elH2.id = 'remuneration';
        window.document.querySelector('#recueilinfos').appendChild(elH2);
    }

    // Gestion de l'affichage avec gestion particulière pour 0 et 1 accident
    if (nbAccidents === 0) {
        elH2.innerHTML = 'Votre prime sera de ' + primeAnnuelle + ' €';
    } else if (nbAccidents === 1) {
        elH2.innerHTML = 'Votre prime sera de ' + primeAnnuelle
                + ' € alors qu\'elle aurait pu être de '
                + primeAnnuelleSansAccident + ' € sans ' + nbAccidents
                + ' accident responsable...';
    } else {
        elH2.innerHTML = 'Votre prime sera de ' + primeAnnuelle
                + ' € alors qu\'elle aurait pu être de '
                + primeAnnuelleSansAccident + ' € sans ' + nbAccidents
                + ' accidents responsables...';
    }
}


/**
 * Fonction qui retourne un entier depuis une valeur prise dans le DOM
 *
 * @param {String} id
 * @return {integer}
 */
function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}

