/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
/**
 * Retourne la prime de distance perçue en fonction des kilometres parcourus
 * @param {Integer} distKm
 * @returns {Number}
 */
function primeDistance(distKm){
    const plafond = 900;
    const primeParKm = 0.01;
    if (primeParKm*distKm >= plafond){
        return plafond;
    }else {
        return primeParKm*distKm;
    }
}

/**
 * Retourne la prime d'anciennetée en tenant compte du bonus
 * @param {Integer} annees
 * @param {integer} fixe
 * @returns {Number}

 */
function primeAncien(annees, fixe){
    const prime = 300;
    const pallier = 4;
    const bonus = 30;
    
    if(annees < pallier){
        return fixe;
    }else {
        return fixe + prime+bonus*(annees-pallier);
    }
}

/**
 * 
 * @param {type} primeTotale
 * @param {type} nbAccident
 * @returns {undefined}
 */
function reduction(primeTotale, nbAccident){
    const premAcc = 0.5;
    const deuxAcc = 0.33;
    const troisAcc = 0.25;
    const quatAcc = 0.0;
    
    if(nbAccident === 1){
        return primeTotale*premAcc;
    }else if(nbAccident === 2){
        return primeTotale*deuxAcc;
    }else if(nbAccident === 3){
        return primeTotale*troisAcc;
    }else {
        return quatAcc;
    }    
}

