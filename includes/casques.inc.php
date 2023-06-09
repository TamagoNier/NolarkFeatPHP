<?php

/*
  $cnx = new PDO('mysql:host=127.0.0.1; dbname=nolark', 'nolarkuser', 'nolarkpwd');

  $req = 'SELECT casque.id, nom, modele, libelle, prix, classement, image, stock';
  $req .= ' FROM casque INNER JOIN type ON casque.type=type.id';
  $req .= ' INNER JOIN marque ON casque.marque=marque.id';
  $res = $cnx->query($req);

  echo '<section id="casques">';
  while ($ligne = $res->fetch(PDO::FETCH_OBJ)) {
  $path = $_SERVER['PHP_SELF']; //chercher le chemin de la page courante
  $nom = basename($path); //ne prend que le nom de la page

  if ($ligne->libelle === substr($nom, 0, -4)) {
  echo '<article>';
  echo '<img src="../images/casques/', $ligne->libelle, '/', $ligne->image,
  '" alt="', $ligne->modele, '">';
  //verification stock
  if ($ligne->stock <= 0) {
  echo '<p class="stockko"><abbr data-tip="Sur commande uniquement">stock</abbr></p>';
  } elseif ($ligne->stock < 10) {
  echo '<p class="stockok"><abbr data-tip="Plus que ', $ligne->stock, ' casques en stock...">stock</abbr></p>';
  } else {
  echo '<p class="stockok"><abbr data-tip=" ', $ligne->stock, ' casques en stock">stock</abbr></p>';
  }

  echo '<p class="prix">', $ligne->prix, '€</p>';
  echo '<p class="marque">', $ligne->nom, '</p>';

  $nomModele = str_replace("-", " ", ($ligne->image)); //Remplace les - par des espaces dans le nom de l'image
  echo '<p class="modele">', substr($nomModele, 0, -4), '</p>';

  echo '<img class="classement classement', $ligne->classement, '" src="../images/casques/etoiles.gif" alt="Classement ', ($ligne->classement) / 10, ' sur 5">';
  echo '</article>';
  }
  }
  echo '</section>'; */ //MA VERSION 

require_once '../vendor/autoload.php'; // Autochargement des dépendances
try {
// Requête SQL
    $cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkusr', 'nolarkpwd');
    $req = 'SELECT * FROM casque INNER JOIN type ON casque.type=type.id';
    $req .= ' INNER JOIN marque ON casque.marque=marque.id';
    $req .= ' WHERE libelle="' . substr($pageActuelle, 0, -4) . '"';
    $res = $cnx->prepare($req);
    $res->execute();
    $res->fetch(PDO::FETCH_OBJ);
    unset($cnx); // Fermeture connexion
    $loader = new Twig_Loader_Filesystem('../tpl'); // Répertoire vers les templates
// Initialisation de l'environnement Twig
    $twig = new Twig_Environment($loader, array(
        'cache' => '../cache',
    ));
    $template = $twig->loadTemplate('casques.twig'); // Chargemement du template
// Affectation des variables du template
    echo $template->render(array(
        'casques' => $res
    ));
} catch (PDOException $e) {
    echo 'Erreur: ' . $e->getMessage();
}