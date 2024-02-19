<?php
require_once __DIR__.'/../../config.php';

$message='';

if(isset($id) && filter_var($id, FILTER_VALIDATE_INT)){
    $stmt = $pdo->prepare('DELETE FROM jeux_plateformes WHERE id_jeux=:id');
    $stmt->bindValue(':id', $id);
    if($stmt->execute()){
        $stm = $pdo->prepare('DELETE FROM jeux WHERE id=:id');
        $stm->bindValue(':id', $id);
        if($stm->execute()){
            http_response_code(200);
        }
        else{
            $message = "Erreur lors de la suppresion du jeu.";
            http_response_code(400);
        }
    }else{
        $message = "Erreur lors de la suppresion du jeu.";
        http_response_code(400);
    }
}else{
    $message = "Erreur lors de la suppresion du jeu.";
    http_response_code(400);
}