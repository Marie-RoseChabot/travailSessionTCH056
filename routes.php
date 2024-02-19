<?php

require_once __DIR__.'/router.php';


get('/', 'index.php');
get('/index.php', 'index.php');
any('/login.php', 'login.php');
any('/nouvelUsager.php', 'nouvelUsager.php');
get('/index.php?deconnexion=1', 'index.php');




get('/api/jeux/$id', '/api/jeux/getJeu.php');
post('/api/jeux/ajouter', '/api/jeux/ajouterJeu.php');
post('/login', 'login.php');