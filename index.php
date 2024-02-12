<?php
require_once __DIR__.'/config.php';
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
    <script src="./script/listeJeux.js" defer></script>

    <div class="conteneur">
        <header class="zone-page entete">
        <img src="./images/game-controller.png" alt="en-tete">
        <button type="button" id="ajouterJeu">Ajouter un jeu</button>
        <a href="./login.php">Autenthification</a>

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
