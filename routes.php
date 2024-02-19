<?php

require_once __DIR__.'/router.php';


// get('/', 'index.php');
get('/index.php', 'index.php');
any('/login.php', 'login.php');
any('/nouvelUsager.php', 'nouvelUsager.php');




get('/api/jeux/$id', './api/jeux.php');