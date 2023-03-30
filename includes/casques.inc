<?php

$cnx = new PDO('mysql:host=127.0.0.1; dbname=nolark', 'nolarkuser', 'nolarkpwd');

$req = 'SELECT casque.id, nom, modele, libelle, prix, classement, image, stock';
$req .= ' FROM casque INNER JOIN type ON casque.type=type.id';
$req .= ' INNER JOIN marque ON casque.marque=marque.id';
$res = $cnx->query($req);

echo '<section id="casques">';
while ($ligne = $res->fetch(PDO::FETCH_OBJ)) {
    echo '<article>';
    echo '<img src="../images/casques/', $ligne->libelle, '/', $ligne->image,
    '" alt="', $ligne->modele, '">';
    
    if($ligne->stock <= 0){
        echo '<p class="stockko"><abbr data-tip="Sur commande uniquement">stock</abbr></p>';
    }elseif ($ligne->stock < 10) {
        echo '<p class="stockok"><abbr data-tip="Plus que ', $ligne->stock,' casques en stock...">stock</abbr></p>';
    }else {
        echo '<p class="stockok"><abbr data-tip=" ', $ligne->stock,' casques en stock">stock</abbr></p>';
    }
    
    echo '<p class="prix">',$ligne->prix,'</p>';
    echo '<p class="marque">',$ligne->nom,'</p>';
    
    $nomModele = str_replace("-"," ", ($ligne->image));
    echo '<p class="modele">', substr($nomModele, 0, -4),'</p>';

    echo '<img class="classement classement',$ligne->classement,'" src="../images/casques/etoiles.gif" alt="Classement ',($ligne->classement)/10,' sur 5">';
    echo '</article>';
}
echo '</section>';
