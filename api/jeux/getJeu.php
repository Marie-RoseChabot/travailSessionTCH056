<?php
require_once __DIR__.'/../../config.php';

if(isset($id) && filter_var($id, FILTER_VALIDATE_INT)){
    $stmt = $pdo->prepare("SELECT * FROM `jeux` WHERE `id` = :idJeu");

    $stmt->bindParam(':idJeu', $id, PDO::PARAM_INT);

    if($stmt->execute()){
        $contenuJeu = $stmt->fetch(PDO::FETCH_ASSOC);

        if($contenuJeu){
            header('Content-Type: application/json');

            echo json_encode($contenuJeu);
        }
        else{
            echo json_encode(['erreur' => "Il n'y a aucune jeux avec cet id"]);
        }
    }
}