<?php
require_once __DIR__.'/../../config.php';

$message='';


if(isset($id) && filter_var($id, FILTER_VALIDATE_INT)){
    $body = json_decode(file_get_contents("php://input"));
    $jeu = get_object_vars($body);
    $nomJeu = $jeu['titre'];
    $imgJeu = $jeu['url_image'];
    $categorieJeu = $jeu['id_categorie'];
    $plateformesJeu = $jeu['plateformes'];
    $stmt = $pdo->prepare('UPDATE jeux SET titre=:titre, url_image=:img, id_categorie=:cat WHERE id=:id');
    $stmt-> bindValue(':titre', $nomJeu);
    $stmt-> bindValue(':img', $imgJeu);
    $stmt-> bindValue(':cat', $categorieJeu);
    $stmt-> bindValue(':id', $id);
    if($stmt->execute()){
        $stm = $pdo->prepare('INSERT INTO jeux_plateformes (id_jeux, id_plateforme) VALUES (?,?)');
        $del = $pdo->prepare('DELETE FROM jeux_plateformes WHERE id_jeux = :id');
        $del-> bindValue(':id', $id);
        $del-> execute();
        foreach ($plateformesJeu as $idPlateforme){
            if(!$stm->execute([$id, $idPlateforme])){
                $message = "Erreur lors de l'ajout des plateformes";
            }
        }
        http_response_code(200);
    }
    else{
        $message = "Erreur lors de la modification du jeu.";
        http_response_code(400);
    }
}
else{
    http_response_code(400);
}