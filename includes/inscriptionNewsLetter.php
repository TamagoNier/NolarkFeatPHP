<?php
$unMail = $_POST['i_email'];
//if ($_POST['test'] == 'value1')

function setInfoLettre($mail)
{
    $cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkusr', 'nolarkpwd');
    $req = 'INSERT INTO news_letter(email, date_demande) VALUES("'.$mail.'",'.date("d/m/Y").')';
    $res = $cnx->prepare($req);
    $res->execute();
    unset($cnx);
}

function setConcent($mail)
{
     $cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkusr', 'nolarkpwd');
     $req = 'UPDATE news_letter SET concent = true, date_recueill = '.date("d/m/Y").' WHERE email = "'.$mail.'"';
     $res = $cnx->prepare($req);
     $res->execute();
     unset($cnx);
}

function removeConcent($mail)
{
    $cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkusr', 'nolarkpwd');
    $req = 'DELETE FROM news_letter WHERE concent = false AND email = "'.$mail.'"';
    $res = $cnx->prepare($req);
    $res->execute();
    unset($cnx);
}