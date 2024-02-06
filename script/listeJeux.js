let listeJeux=[ {
    "id":0,
    "titre": "Fifa",
    "url": 'https://media.rawg.io/media/resize/420/-/screenshots/f25/f25d5a19210a353478d34dcf00ed1615.jpg',
    "idCategorie":8,
    "plateformes":["pc","switch","xbox","ps"]
},
{
    "id":1,
    "titre": "F1 2018",
    "url": 'https://media.rawg.io/media/resize/420/-/screenshots/660/6600035ca7ccc80832543cab61bbbfbf.jpg',
    "idCategorie":8,
    "plateformes":["pc","xbox","ps"]
},
{
    "id":2,
    "titre": "Apex legend",
    "url": 'https://seeklogo.com/images/A/apex-logo-F74B0C9FCD-seeklogo.com.png',
    "idCategorie":1,
    "plateformes":["pc","xbox","ps","switch"]
},
{
    "id":3,
    "titre": "The Sims 4",
    "url": 'https://image.api.playstation.com/vulcan/img/rnd/202111/3019/Btg9YJMDRcWgsbD5E6rOcdT5.jpg',
    "idCategorie":5,
    "plateformes":["pc","xbox","ps"]
},
{
    "id":4,
    "titre": "No man's Sky",
    "url": 'https://i.pinimg.com/originals/83/66/9a/83669a3627394d993d830b1b6a8e10e5.png',
    "idCategorie":2,
    "plateformes":["pc","xbox","ps","switch"]
},

{
    "id":5,
    "titre": "Portal",
    "url": 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Portal_standalonebox.jpg/220px-Portal_standalonebox.jpg',
    "idCategorie":6,
    "plateformes":["pc","xbox","switch"]
},

{
    "id":6,
    "titre": "Mario Party",
    "url": 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000042934/ae43ce2e25afbc4c069c2920075ead01a84f02dfe55b87876268409f6ccc0304',
    "idCategorie":10,
    "plateformes":["switch"]
},

{
    "id":7,
    "titre": "Spiderman",
    "url": 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1301/5d25e0f94381cf0ff438942642119548f0d6659486f7b75e.png',
    "idCategorie":2,
    "plateformes":["pc","ps"]
},
{
    "id":8,
    "titre": "Fez",
    "url": 'https://cdn.akamai.steamstatic.com/steam/apps/224760/capsule_616x353.jpg?t=1572375251',
    "idCategorie":2,
    "plateformes":["pc","xbox","ps","switch"]
},
{
    "id":9,
    "titre": "Lego",
    "url": 'https://s3.amazonaws.com/gameopedia_covers/covers/174346/0212900aff57a089faa1af1f443b2682.jpg',
    "idCategorie":9,
    "plateformes":["xbox","ps"]
}
]

let listeCategorie=[

{
    "idCategorie":1,
    "nom": "Action",
    "url":'https://image.jeuxvideo.com/medias-md/151309/1513093768-1916-card.jpg'
},

{
    "idCategorie":2,
    "nom": "Aventure",
    "url":'https://static.fnac-static.com/multimedia/Images/FD/Comete/135576/CCP_IMG_1200x800/1778074.jpg'
},

{
    "idCategorie":3,
    "nom": "Indie",
    "url":'https://images.renaud-bray.com/images/PG/3556/3556234-gf.jpg?404=404RB.gif'
},

{
    "idCategorie":4,
    "nom": "Strategie",
    "url":'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2016/02/29/1331779577696_2/civilization-ii-meilleurs-jeux-video-strategie'

},

{
    "idCategorie":5,
    "nom": "Simulation",
    "url":'https://static.cnews.fr/sites/default/files/simus_5f47ca5b24dc9.jpg'

},

{
    "idCategorie":6,
    "nom": "Casse-tete",
    "url":'https://jeuxdesprit.ca/_app/immutable/assets/casse-tete.50c600b3.png'

},

{
    "idCategorie":7,
    "nom":"Arcade",
    "url":'https://m.media-amazon.com/images/I/51nlbOOmj0L._AC_UF894,1000_QL80_.jpg'

},

{
    "idCategorie":8,
    "nom":"Sport",
    "url":'https://cap.img.pmdstatic.net/scale/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FCAP.2F2019.2F09.2F20.2F17f6fb68-8bc2-4412-8b86-9518a8b013ac.2Ejpeg/autox450/quality/65/fifa-plus-de-100-millions-numero-12.jpg'

},

{
    "idCategorie":9,
    "nom":"Famille",
    "url":'https://static.cms.yp.ca/ecms/media/2/28245960_xxl-1427735983-600x360.jpg'

},

{
    "idCategorie":10,
    "nom":"JeuSociete",
    "url":'https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egaming.2Egentside.2Ecom.2Fs3.2Ffrgsg.2F1280.2Floisirs.2Fdefault_2022-05-03_94f263c1-eb26-41b1-8afe-804fe2b79934.2Ejpeg/1200x675/quality/80/ces-5-jeux-de-societe-tires-de-jeux-video-rappelleront-votre-enfance.jpg'
}
]

let listePlateformes=[{
"identification":"ps",
"nom":"PlayStation",
"url":'https://i.ebayimg.com/images/g/5cMAAOSw6jNawVZQ/s-l1600.jpg'
},
{
"identification":"xbox",
"nom":"Xbox",
"url":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM40295n-tx8yLu6BQO_tcx9lvDKrwPom-H1UqCD8c9g&s'
},
{
"identification":"switch",
"nom":"Switch",
"url":'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nintendo_Switch_logo%2C_square.png/768px-Nintendo_Switch_logo%2C_square.png'
},
{
"identification":"pc",
"nom":"PC",
"url":'https://t4.ftcdn.net/jpg/03/66/54/65/360_F_366546568_3M67BtDiUJVeYB6RSeGURK3HTvRWd8YW.jpg'
},

]

let afficherJeux=function(objet,listePlateformes){

const jeux = document.createElement("article");
jeux.classList.add('jeux');
const jeuHeader = document.createElement("div");
jeuHeader.classList.add("jeuHeader");
const titre = document.createElement("h2");
const iconeMod = document.createElement("img");
iconeMod.src = "./images/editing.png";
iconeMod.classList.add("iconesModif");
const iconeSup = document.createElement("img");
iconeSup.classList.add("iconesModif");
iconeSup.src = "./images/remove.png";
iconeSup.id = listeJeux.indexOf(objet);
iconeSup.addEventListener('click', function(){
    const message = document.querySelector('.messageConfirmation');
    backdrop.classList.replace("backdrophidden", "backdrop");
    message.classList.replace("messageConfirmation", "jeuform");
    tempElement = iconeSup.id;
});
iconeMod.addEventListener('click', function(){

    elementChoisi = listeJeux.indexOf(objet);
    const formJeu = document.querySelector(".formcache");
    formJeu.classList.replace("formcache", "jeuform");
    backdrop.classList.replace("backdrophidden", "backdrop");
    const nomDuJeu = document.querySelector("#nomDuJeu");
    const imageDuJeu = document.querySelector("#imageDuJeu");
    const categorieJeu = document.querySelector("#categorieNewJeu");
    nomDuJeu.value = objet.titre;
    imageDuJeu.value = objet.url;
    categorieJeu.value = objet.idCategorie;
    resetCheckbox();
    const p1 = document.querySelector("#ps");
    const p2 = document.querySelector("#xbox");
    const p3 = document.querySelector("#switch");
    const p4 = document.querySelector("#pc");
    for(p of objet.plateformes){
        if(p === "ps"){
            p1.checked = true;
        }
        if(p === "xbox"){
            p2.checked = true;
        }
        if(p === "switch"){
            p3.checked = true;
        }
        if(p === "pc"){
            p4.checked = true;
        }
    }

});




const buttons = document.createElement("div");
buttons.append(iconeSup, iconeMod);
jeuHeader.append(titre, buttons);
const img=document.createElement("img");
const plateformes=document.createElement("div");
plateformes.classList.add('plateformes');


for(let i=0; i<objet.plateformes.length;i++){
    for(let j=0; j<listePlateformes.length;j++){
    if(objet.plateformes[i]===listePlateformes[j].identification){
    const image=document.createElement("img");
    image.src=listePlateformes[j].url;
    plateformes.append(image);
    }
}
}

titre.textContent = objet.titre;
img.src=objet.url;

jeux.append(jeuHeader,img,plateformes);

return jeux;
}


const buttonModifier = document.querySelector("#buttonModifier");
buttonModifier.addEventListener('click', function(){
    const formJeu = document.querySelector(".jeuform");
    let objet = listeJeux[elementChoisi];
    if (p1.checked && !objet.plateformes.includes("ps")){
        objet.plateformes.push("ps");
    }
    if (p2.checked && !objet.plateformes.includes("xbox")){
        objet.plateformes.push("xbox");
    }
    if (p3.checked && !objet.plateformes.includes("switch")){
        objet.plateformes.push("switch");
    }
    if (p4.checked && !objet.plateformes.includes("pc")){
        objet.plateformes.push("pc");
    }
    if (!p1.checked && objet.plateformes.includes("ps")){
        objet.plateformes = objet.plateformes.filter(plat => plat !== "ps");
    }
    if (!p2.checked && objet.plateformes.includes("xbox")){
        objet.plateformes = objet.plateformes.filter(plat => plat !== "xbox");
    }
    if (!p3.checked && objet.plateformes.includes("switch")){
        objet.plateformes = objet.plateformes.filter(plat => plat !== "switch");
    }
    if (!p4.checked && objet.plateformes.includes("pc")){
        objet.plateformes = objet.plateformes.filter(plat => plat !== "pc");
    }
    objet.titre = nomDuJeu.value;
    objet.idCategorie = categorieJeu.value;
    objet.url = imageDuJeu.value;
    formJeu.classList.replace("jeuform", "formcache");
    backdrop.classList.replace("backdrop", "backdrophidden");
    filtrer(listeJeux, tempCategorie, tempPlateforme);

});


let resetCheckbox = function(){
    const p1 = document.querySelector("#ps");
    const p2 = document.querySelector("#xbox");
    const p3 = document.querySelector("#switch");
    const p4 = document.querySelector("#pc");

    p1.checked = false;
    p2.checked = false;
    p3.checked = false;
    p4.checked = false;
}


const confirmationOui = document.querySelector("#confirmationOui");
confirmationOui.addEventListener('click', function(){
    listeJeux.splice(tempElement, 1);
    backdrop.classList.replace("backdrop", "backdrophidden");
    const message = document.querySelector('.jeuform');
    message.classList.replace("jeuform", "messageConfirmation");
    filtrer(listeJeux, tempCategorie, tempPlateforme);

});

const confirmationNon = document.querySelector("#confirmationNon");
confirmationNon.addEventListener('click', function(){
    backdrop.classList.replace("backdrop", "backdrophidden");
    const message = document.querySelector('.jeuform');
    message.classList.replace("jeuform", "messageConfirmation");
    filtrer(listeJeux, tempCategorie, tempPlateforme);

});



for(let i=0;i<listeJeux.length;i++){
    if (listeJeux[i].titre != ""){
        const article = afficherJeux(listeJeux[i],listePlateformes);
        document.querySelector(".liste").appendChild(article);
    }
}



let tempCategorie = "";         // Variable temporaire pour stocker l'information sur la categorie choisie afin de filtrer le contenu
let tempPlateforme = "";        // Variable temporaire pour stocker l'information sur la plateforme choisie afin de filtrer le contenu
let tempElement = "";
let elementChoisi = "";
const nomDuJeu = document.querySelector("#nomDuJeu");
const imageDuJeu = document.querySelector("#imageDuJeu");
const categorieJeu = document.querySelector("#categorieNewJeu");
const p1 = document.querySelector("#ps");
const p2 = document.querySelector("#xbox");
const p3 = document.querySelector("#switch");
const p4 = document.querySelector("#pc");





let afficherCategorie=function(categorie, idCategorie){
    
    const element =document.createElement("li");

    const image=document.createElement("img");
    const a=document.createElement("a");

    a.textContent=categorie.nom;
    a.href="index.html?"+categorie.nom;
    a.setAttribute("id", "categorie" + idCategorie);
    a.addEventListener('click', function(event){
        event.preventDefault();
        tempCategorie = idCategorie;
        filtrer(listeJeux, tempCategorie, tempPlateforme);
        const l1 = "index.html?"+categorie.nom;
        history.pushState(null, null, l1);
    
    });
    image.src=categorie.url;


    element.append(a,image);
    liste.append(element);

    return liste
}
const liste=document.createElement("ul");
document.querySelector("nav").append(liste);
liste.setAttribute("class", "categorie");
for(let i=0;i<listeCategorie.length;i++){
    afficherCategorie(listeCategorie[i], i+1);
    }

let filtrer = function(listeJeu, idCat, idPlateforme){
    const jeux = document.querySelectorAll(".jeux");
    jeux.forEach(function(jeu){
        jeu.remove();
    });
    for(let i=0; i<listeJeu.length;i++){
        const checkCat = idCat == "" || listeJeux[i].idCategorie == idCat;
        const checkPlateforme = idPlateforme == "" || listeJeux[i].plateformes.includes(idPlateforme);
        if (checkCat && checkPlateforme && listeJeux[i].titre != ""){
            const article = afficherJeux(listeJeux[i],listePlateformes);
            document.querySelector(".liste").appendChild(article);
        }
    }
}

const choixPlateforme = document.querySelector("#deroulant");
choixPlateforme.addEventListener('change', function(){
    tempPlateforme = choixPlateforme.value;
    filtrer(listeJeux, tempCategorie, tempPlateforme);
})
const choixToutes = document.createElement("option");
choixPlateforme.append(choixToutes);
choixToutes.setAttribute("id", "p0");
choixToutes.setAttribute("value", "");
choixToutes.textContent = "--Toutes--";
for (let i = 0; i<listePlateformes.length;i++){
    const choix = document.createElement("option");
    choixPlateforme.append(choix);
    choix.setAttribute("value", listePlateformes[i].identification);
    choix.textContent = listePlateformes[i].nom;
}


const backdrop = document.querySelector(".backdrophidden");
backdrop.addEventListener('click', function(event) {
    if (event.target === backdrop) {
        const formJeu = document.querySelector(".jeuform");
        formJeu.classList.replace("jeuform", "formcache");
        backdrop.classList.replace("backdrop", "backdrophidden");
    }
});
const ajouter = document.querySelector("#ajouterJeu");
ajouter.addEventListener('click', function(){
    const formJeu = document.querySelector(".formcache");
    formJeu.classList.replace("formcache", "jeuform");
    backdrop.classList.replace("backdrophidden", "backdrop");
    
});

let nouveauJeu = {
    "id":0,
    "titre": "",
    "url": "",
    "idCategorie": 0,
    "plateformes":[]
    }
const buttonAjouter = document.querySelector("#buttonNewJeu");
buttonAjouter.addEventListener('click', function(){
    const nouveauJeuForm = document.querySelector(".jeuform");
    let nomsJeux = [];
    for(let n = 0; n<listeJeux.length; n++){
        nomsJeux.push(listeJeux[n].titre);
    }
        if(!nomsJeux.includes(nomDuJeu.value)){
            //if(nomDuJeu.value != listeJeux[k].titre){


                nouveauJeu.titre = nomDuJeu.value;
                nouveauJeu.id = listeJeux.length;
                // const imageDuJeu = document.querySelector("#imageDuJeu");
                nouveauJeu.url = imageDuJeu.value;
                nouveauJeu.idCategorie = categorieJeu.value;
                console.log(nouveauJeu);
                if (p1.checked){
                    
                    nouveauJeu.plateformes.push("ps");
                }
                if(p2.checked){
                    nouveauJeu.plateformes.push("xbox");
                }
                if(p3.checked){
                    nouveauJeu.plateformes.push("switch");
                }
                if(p4.checked){
                    nouveauJeu.plateformes.push("pc");
                }
                console.log(p1.checked);
                listeJeux.push(nouveauJeu);
                nouveauJeuForm.classList.replace("jeuform", "formcache");
                backdrop.classList.replace("backdrop", "backdrophidden");
                filtrer(listeJeux, tempCategorie, tempPlateforme);
                }
            

});