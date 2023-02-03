/**
 * Function qui retourne l'alcool pur ingéré en function du
 * nombre de verres
 * 
 * @param {int} nbVerres
 * @returns {int}
 */
function getAlcoolPur(nbVerres){
    return nbVerres*10;
}

function getCoefDiffusion(sexe) {
    if(sexe === 'homme') {
        return 0.7;
    }else {
        return 0.6;
    }
}

function getAlcoolemie(sexe, poids, nbVerres){
    return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
}
