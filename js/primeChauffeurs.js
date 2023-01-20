/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
/**
 * Retourne la prime de distance perçue en fonction des kilometres parcourus
 * @param {integer} distKm
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