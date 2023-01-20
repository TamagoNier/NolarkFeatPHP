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
 * @returns {Number}
 */
function primeAncien(annees){
    const prime = 300;
    const pallier = 4;
    const bonus = 30;
    
    if(annees < pallier){
        return 0;
    }else {
        return prime+bonus*(annees-pallier);
    }
}

function reduction(primeTotale, nbAccident){
    const premAcc = 0.5;
    const deuxAcc = 0.33;
    const troisAcc = 0.25;
    const quatAcc = 0.0;
    
}