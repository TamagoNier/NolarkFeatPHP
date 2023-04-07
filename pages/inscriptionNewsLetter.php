<?php
function setInfoLettre($mail)
{
    $cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkusr', 'nolarkpwd');
    $req = 'INSERT INTO news_letter(email) VALUES('.$mail.')';
    $res = $cnx->prepare($req);
    $res->execute();
}

function setConcent($mail)
{
    
}