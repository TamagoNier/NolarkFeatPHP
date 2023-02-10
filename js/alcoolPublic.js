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
    }else {
        return 0; //A changer peut-etre 
    }
}
