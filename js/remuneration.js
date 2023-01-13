/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const fixe = 1100; 
const nbAncien = parseInt(window.document.querySelector("#num_ancien").value);
const s20Vendus = parseInt(window.document.querySelector("#id_s").value); 
const xSpiritVendus = parseInt(window.document.querySelector("#id_xspirit").value); // Int 
const multitecVendus = parseInt(window.document.querySelector("#id_multitec").value); // Int 
    
function primeAncien(salaire, nbAnnees){
    if (nbAnnees>=5&&nbAnnees<10){
        return salaire*1.03;
    }else if(nbAnnees>=10) {
        return salaire*1.06;
    }else {
        return salaire;
    }
}

function comXSpirit(qteXSpirit){
    const prixXSpirit = 350;
    const txComXS = 0.06;
    return ((qteXSpirit-50)*prixXSpirit)*txComXS;
}

function comS20(qteS20){
    const prixS20 = 140;
    const txComS20 = 0.02;
    return qteS20*prixS20*txComS20;
}

function comMultitec(qteMulti){
    
}





window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi);
});
