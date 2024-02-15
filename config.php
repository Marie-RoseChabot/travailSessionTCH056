<?php
session_start();
$gPublic = True;

 if ((!isset($gPublic) || !$gPublic) &&  !isset($_SESSION["usager"])) {
    header("Location: login.php");
    exit;
} elseif(isset($_SESSION["usager"])) {

    $gUserId = $_SESSION["usager"];
} else { 
    $gUserId = 0;
}

if(isset($_GET["deconnexion"])){
    session_unset();
    header("Location: ".$_SERVER['PHP_SELF']);
    exit;
} 

$host = 'db';
$db   = 'mydatabase';
$user = 'user';
$pass = 'password';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Erreur de connexion à la base de données: ".$e->getMessage());
}

