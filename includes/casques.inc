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
    echo '<p class="prix">',$ligne->prix,'</p>';
    echo '</article>';
}
echo '</section>';
