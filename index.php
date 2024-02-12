<?php
require_once __DIR__.'/config.php';

$reqJeux = $pdo->prepare('SELECT * FROM jeux');
$reqJeux->execute();
$jeux = $reqJeux->fetchAll();
$jeuxJson = json_encode($jeux);


$reqCategories = $pdo->prepare('SELECT * FROM categories');
$reqCategories->execute();
$categories = $reqCategories->fetchAll();
$categoriesJson = json_encode($categories);


$reqPlateformes = $pdo->prepare('SELECT * FROM plateformes');
$reqPlateformes->execute();
$plateformes = $reqPlateformes->fetchAll();
$plateformesJson = json_encode($plateformes);


$reqJeuxPlateformes = $pdo->prepare('SELECT * FROM jeux_plateformes');
$reqJeuxPlateformes->execute();
$jeuxPlateformes = $reqJeuxPlateformes->fetchAll();
$jeuxPlateformesJson = json_encode($jeuxPlateformes);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./Style/style.css" />
    <link rel="stylesheet" href="./Style/normalize.css" />
    <title>Jeux</title>
    

  </head>

  <body>
    <div class="backdrophidden"></div>
    <form class="formcache">
      <label for="nomDuJeu">Nom:</label><br>
      <input type="text" id="nomDuJeu" name="nomDuJeu"><br>
      <label for="imageDuJeu">Image:</label><br>
      <input type="url" id="imageDuJeu" name="imageDuJeu"><br>
      <label for="categorieNewJeu">Categorie:</label>
      <select name="categorieNewJeu" id="categorieNewJeu">
        <option value="0">Selectionnez</option>
      </select><br>
      Plateformes:<br>
      <button type="button" id="buttonNewJeu">Ajouter</button>
      <button type="button" id="buttonModifier">Modifier</button>
    </form>
    <div class="messageConfirmation">
      <h2>Veuillez vous supprimer ce jeu?</h2>
      <div class="confirmationButtons">
        <button type="button" id="confirmationOui">Oui</button>
        <button type="button" id="confirmationNon">Non</button>
      </div>
    </div>
    <script>
      let listeJeuxPlateformes = <?= $jeuxPlateformesJson ?>;
      let listeCategorie = <?= $categoriesJson ?>;
      let listeJeux = <?= $jeuxJson ?>;
      listeJeux.forEach((jeux)=>{
        jeux.plateformes = [];
        listeJeuxPlateformes.forEach((jeuxPlateforme)=>{
          if(jeuxPlateforme.id_jeux == jeux.id){
            jeux.plateformes.push(jeuxPlateforme.id_plateforme);
          }
        })
      })
      let listePlateformes = <?= $plateformesJson ?>;
      let gUserId = <?= $gUserId?>;
    </script>
    <script src="./script/listeJeux.js" defer></script>

    <div class="conteneur">
        <header class="zone-page entete">
        <img src="./images/game-controller.png" alt="en-tete">
        <button type="button" id="ajouterJeu">Ajouter un jeu</button>
        <a href="./login.php" class="autent" id="autentification">Autenthification</a>
        <a href="./index.php?deconnexion=1" class="deconnCache" id="deconnexion">Deconnexion</a>

        </header>
        <nav>
        
		
        </nav>

        <main>
        
       
        <div class="principal">      
            
            <div class="deroulant">
            <label for="deroulant">Plateforme:</label>

            <select name="deroulant" id="deroulant">
            </select>
        </div>
        


        <div class="liste">
           
    </div>
        
    
        </main>
    <div class="baspage">Marie-Rose Chabot & Tymofii Niemchenko</div>
    </div>
  </body>
</html>
