<?php
$gPublic = true;
require_once __DIR__.'/config.php';

$error ='';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $password = $_POST['password'];

  $stmt = $pdo->prepare('SELECT * FROM usagers WHERE login = ?');
  $stmt->execute([$username]);
  $user = $stmt->fetch();

  if ($user && password_verify($password, $user['password'])) {
      $_SESSION['usager'] = $user['id'];
      header("Location: /index.php");
      exit;
  } else {
      $error = "Nom d'utilisateur ou mot de passe incorrect.";
  }
}
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Inscription </title>
    <link rel="stylesheet" href="./Style/style.css" />
    <link rel="stylesheet" href="./Style/normalize.css" />
   
  </head>
  <body>
    
  <div class="conteneur">
        <header class="zone-page entete">
      <h1>Inscription</h1>
    </header>

      <section id="authentification" class="login">
        <h2>Authentification</h2>
        <?php if($error): ?>
            <div class="alert alert-danger"><?= $error ?></div>
        <?php endif; ?>
        <form id="loginForm" class="form-group" action='./login.php' method='post'>
          <label for="username">Nom d'utilisateur:</label>
          <input
            type="text"
            id="username"
            name="username"
            class="form-control"
            required
          />

          <label for="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            required
          />

          <button type="submit" class="btn btn-primary mt-2 .align-top">
            Se connecter
          </button> <button class="btn btn-secondary mt-2" onclick = "window.location.href='./nouvelUsager.php';">Créer un compte</button>
          
        </form>
      </section>
    </div>

    <div class="baspage">Marie-Rose Chabot & Tymofii Niemchenko</div>

  </body>
</html>
s