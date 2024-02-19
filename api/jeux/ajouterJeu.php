<?php
require_once __DIR__.'/../../config.php';
$message = '';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $body = json_decode(file_get_contents("php://input"));
    $jeu = get_object_vars($body);
    $nomJeu = $jeu['titre'];
    $imgJeu = $jeu['url_image'];
    $categorieJeu = $jeu['id_categorie'];
    $plateformesJeu = $jeu['plateformes'];
    $stmt = $pdo->prepare('INSERT INTO jeux (titre, url_image, id_categorie) VALUES (?, ?, ?)');
    if ($stmt->execute([$nomJeu, $imgJeu, $categorieJeu])) {
        $idJeu = $pdo->lastInsertId();
        $jeu['id'] = $idJeu;
        $stm = $pdo->prepare('INSERT INTO jeux_plateformes (id_jeux, id_plateforme) VALUES (?,?)');
        foreach ($plateformesJeu as $idPlateforme){
            if(!$stm->execute([$idJeu, $idPlateforme])){
                $message = "Erreur lors de l'ajout des plateformes";
            }
        }
        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode($jeu);
    } else {
        $message = "Erreur lors de l'ajout du jeu.";
        http_response_code(400);
    }
}