<?php
$gPublic = true;
require_once __DIR__.'/config.php';

$message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
   
    

    $type_usager="regulier";

    $stmt = $pdo->prepare('SELECT * FROM usagers WHERE login = ?');
    $stmt->execute([$username]);
    if ($stmt->fetch()) {
        $message = 'Ce nom d\'utilisateur est déjà pris.';
    } else {
     
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

       
        $stmt = $pdo->prepare('INSERT INTO usagers (login, PASSWORD, email, type_usager) VALUES (?, ?, ?, ?)');
        if ($stmt->execute([$username, $passwordHash, $email,$type_usager])) {
            header("Location: login.php");
            exit;
        } else {
            $message = 'Erreur lors de la création du compte.';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <title>Inscription</title>
    <link rel="stylesheet" href="./Style/style.css" />
    <link rel="stylesheet" href="./Style/normalize.css" />
</head>
<body>
    <header >
        <h1>Inscription</h1>
    </header>

    <div class="container">
        <section id="nouvelUsager" class="compte">
            <h2>Créer un compte</h2>
            <?php if($message): ?>
                <div class="alert alert-danger"><?php echo $message; ?></div>
            <?php endif; ?>
            <form method="post" action="./nouvelUsager.php">
                <div class="form-group">
                    <label for="username">Nom d'utilisateur:</label>
                    <input type="text" id="username" name="username" class="form-control" required />
                </div>

                <div class="form-group">
                    <label for="email">Courriel:</label>
                    <input type="email" id="email" name="email" class="form-control" required />
                </div>

                <div class="form-group">
                    <label for="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" class="form-control" required />
                </div>

                <button type="submit" class="btn btn-primary">S'inscrire</button>
            </form>
        </section>
    </div>
    <div class="baspage">Marie-Rose Chabot & Tymofii Niemchenko</div>
   
</body>
</html>
