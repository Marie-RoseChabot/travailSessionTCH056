<?php

require_once __DIR__.'/router.php';

get('/', 'index.php');
get('/index.php', 'index.php');
any('/login.php', 'login.php');
any('/nouvelUsager.php', 'nouvelUsager.php');





any('/404','404.php');

