<?php

require_once __DIR__.'/router.php';


get('/', 'index.php');
get('/index.php', 'index.php');
any('/login.php', 'login.php');
any('/nouvelUsager.php', 'nouvelUsager.php');
get('/index.php?deconnexion=1', 'index.php');
post('/login', 'login.php');




get('/api/jeux/$id', '/api/jeux/getJeu.php');
post('/api/jeux/ajouter', '/api/jeux/ajouterJeu.php');
put('/api/jeux/modifier/$id', '/api/jeux/modifierJeu.php');
delete('/api/jeux/supprimer/$id', '/api/jeux/supprimerJeu.php');
