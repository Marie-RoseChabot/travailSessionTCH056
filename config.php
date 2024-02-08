<?php
// Démarrage de la session
session_start();

// Vérification si l'utilisateur est connecté, sinon redirection vers la page de connexion
if ((!isset($gPublic) || !$gPublic) &&  !isset($_SESSION["usager"])) {
    header("Location: login.php");
    exit;
} elseif(isset($_SESSION["usager"])) {
    // Obtention de l'ID de l'utilisateur connecté
    $gUserId = $_SESSION["usager"];
} else { //Usager pas authentifié mais la page est publique
    $gUserId = 0;
}

if(isset($_GET["logout"])){
    unset($_SESSION['usager']);
    header("Location: login.php");
    exit;
}

//Configuration et connexion à la base de données
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

