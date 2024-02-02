<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Jeux</title>
        <link rel="stylesheet" href="./Style/normalize.css">
        <link rel="stylesheet" href="./Style/style.css">
	</head>	
	<body>
    <div class="conteneur">
        <header class="zone-page entete">
        <img src="./images/game-controller.png" alt="en-tete">
        <a href="index.html?authentification">Autenthification</a>

        </header>
        <nav>
        
		<ul>
            <li><img src="./images/action.jpg" /><a href="index.html?categorie=1">Action </a> </li>
            <li><img src="./images/indie.jpg" /><a href="index.html?categorie=2">Indie</a></li>
            <li><img src="./images/aventure.jpg" /><a href="index.html?categorie=3">Aventure</a></li>
            <li><img src="./images/strategie.jpg" /><a href="index.html?categorie=4">Stratégie</a></li>
            <li><img src="./images/simulation.jpg" /><a href="index.html?categorie=5">Simulation</a></li>
            <li><img src="./images/casse-tete.jpg" /><a href="index.html?categorie=6">Casse-Tête</a></li>
            <li><img src="./images/arcade.jpg" /><a href="index.html?categorie=7">Arcade</a></li>
            <li><img src="./images/sport.jpg" /><a href="index.html?categorie=8">Sports</a></li>
            <li><img src="./images/famille.jpg" /><a href="index.html?categorie=9">Famille</a></li>
            <li><img src="./images/boardgame.jpg" /><a href="index.html?categorie=10">Jeu de société</a></li>
        </ul>
    </nav>

        <main>
        
       
        <div class="principal">      
            
            <div class="deroulant">
            <label for="deroulant">Plateforme:</label>

            <select name="deroulant" id="deroulant">
              <option value="">--Toutes--</option>
              <option value="ps4">PS4</option>
              <option value="xbox">Xbox</option>
              <option value="pc">PC</option>
              <option value="switch">Switch</option>
            </select>
        </div>
        
        <div class="liste">
            <article class="jeux">
                
                <h2>Mario</h2>
                <img src="./images/mario.jpeg" />
                <div class="plateformes">
                    <img src="./images/nintendo-switch.png" />
                    <img src="./images/xbox.png" />
                </div>
                
            </article>
        

            <article class="jeux">
                <h2>Elden Ring</h2>
                <img src="./images/elden_ring.jpeg" />
            <div class="plateformes">
                <img src="./images/desktop.png" />
                <img src="./images/ps4.png"/>
                <img src="./images/xbox.png"/>
            </div>
            </article>

            <article class="jeux">
                <h2>Fifa</h2>
                <img src="./images/fifa.jpg" />
                <div class="plateformes">
                    <img src="./images/desktop.png" />
                    <img src="./images/ps4.png"/>
                    <img src="./images/xbox.png"/>
            </div>
            </article>

            <article class="jeux">
                <h2>Nhl</h2>
                <img src="./images/nhl.jpg" />
                <div class="plateformes">
                    <img src="./images/desktop.png" />
                    <img src="./images/ps4.png"/>
                    <img src="./images/xbox.png"/>
            </div>
        </article>

            <article class="jeux">
                <h2>Civilization</h2>
                <img src="./images/civilization.jpg" />
                <div class="plateformes">
                <img src="./images/desktop.png" />
                <img src="./images/ps4.png"/>
                <img src="./images/xbox.png"/>
            
            </div>
        </article>


            <article class="jeux">
                <h2>Dance</h2>
                <img src="./images/dance.jpg" />
                <div class="plateformes">
                <img src="./images/xbox.png" />
            
            </div>
        </article>

        <article class="jeux">
            
            <h2>Mario Party</h2>    
            <img src="./images/mario_party.jpeg" />
                <div class="plateformes">
                <img src="./images/nintendo-switch.png" />
            </div>
        </article>

        <article class="jeux">    
        
            <h2>Minecraft</h2>    
            <img src="./images/minecraft.jpeg" />
                <div class="plateformes">
                    <img src="./images/desktop.png" />
                    <img src="./images/ps4.png"/>
                    <img src="./images/xbox.png"/>
                    <img src="./images/nintendo-switch.png"/>
            </div>
        </article>

        <article class="jeux">    
        
            <h2>Zelda</h2>    
            <img src="./images/zelda.jpeg" />
                <div class="plateformes">
                <img src="./images/nintendo-switch.png" />
            </div>
        </article>
            
        <article class="jeux">
        
            <h2>Lego</h2>    
            <img src="./images/lego.webp" />
                <div class="plateformes">
                    <img src="./images/desktop.png" />
                    <img src="./images/ps4.png"/>
                    <img src="./images/xbox.png"/>
            </div>
        </article>
    </div>
        
    
        </main>
    <div class="baspage">Marie-Rose Chabot et Tymofii Niemchenko</div>
    </div>
  </body>
</html>
