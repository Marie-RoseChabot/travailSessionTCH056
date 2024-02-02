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
const titre = document.createElement("h2");
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


jeux.append(titre,img,plateformes);

return jeux;
}

for(let i=0;i<listeJeux.length;i++){
const article = afficherJeux(listeJeux[i],listePlateformes);
document.querySelector(".liste").appendChild(article);
}

let afficherCategorie=function(categorie){
    
    
    const liste=document.createElement("ul");
    const element =document.createElement("li");


    const image=document.createElement("img");
    const a=document.createElement("a");

    a.textContent=categorie.nom;
    a.href="index.html?categorie="+categorie.idCategorie;
    image.src=categorie.url;


    element.append(a,image);
    liste.append(element);

    return liste
}


for(let i=0;i<listeCategorie.length;i++){
    const article = afficherCategorie(listeCategorie[i]);
    document.querySelector(".categorie").append(article);
    }



