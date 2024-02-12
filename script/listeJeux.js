const buttonAjouter = document.querySelector("#buttonNewJeu");
let tempCategorie = "";         // Variable temporaire pour stocker l'information sur la categorie choisie afin de filtrer le contenu
let tempPlateforme = "";        // Variable temporaire pour stocker l'information sur la plateforme choisie afin de filtrer le contenu
let tempElement = "";
let elementChoisi = "";
const nomDuJeu = document.querySelector("#nomDuJeu");
const imageDuJeu = document.querySelector("#imageDuJeu");
const categorieJeu = document.querySelector("#categorieNewJeu");

let afficherJeux = function (objet, listePlateformes) {

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
    iconeSup.addEventListener('click', function () {
        const message = document.querySelector('.messageConfirmation');
        backdrop.classList.replace("backdrophidden", "backdrop");
        message.classList.replace("messageConfirmation", "messageAff");
        tempElement = iconeSup.id;
    });
    iconeMod.addEventListener('click', function () {

        elementChoisi = listeJeux.indexOf(objet);
        const formJeu = document.querySelector(".formcache");
        formJeu.classList.replace("formcache", "jeuform");
        backdrop.classList.replace("backdrophidden", "backdrop");
        const nomDuJeu = document.querySelector("#nomDuJeu");
        const imageDuJeu = document.querySelector("#imageDuJeu");
        const categorieJeu = document.querySelector("#categorieNewJeu");
        nomDuJeu.value = objet.titre;
        imageDuJeu.value = objet.url_image;
        categorieJeu.value = objet.id_categorie;
        resetCheckbox();
        for (p of objet.plateformes) {
            const checkboxPlat = document.querySelector(`#checkbox${p}`);
            checkboxPlat.checked = true;
        }

    });




    const buttons = document.createElement("div");
    buttons.append(iconeSup, iconeMod);
    jeuHeader.append(titre, buttons);
    const img = document.createElement("img");
    const plateformes = document.createElement("div");
    plateformes.classList.add('plateformes');


    for (let i = 0; i < objet.plateformes.length; i++) {
        for (let j = 0; j < listePlateformes.length; j++) {
            if (objet.plateformes[i] === listePlateformes[j].id) {
                const image = document.createElement("img");
                image.src = listePlateformes[j].url_icone;
                plateformes.append(image);
            }
        }
    }

    titre.textContent = objet.titre;
    img.src = objet.url_image;

    jeux.append(jeuHeader, img, plateformes);

    return jeux;
}
let setPlateformes = function (Jeu) {
    const checkPlat = document.querySelectorAll(".divPlat input");
    Jeu.plateformes = [];
    checkPlat.forEach((input) => {
        if (input.checked) {
            Jeu.plateformes.push(parseInt(input.getAttribute("id").substring(8)));
        }
    })
    return Jeu.plateformes.length > 0;
}

const buttonModifier = document.querySelector("#buttonModifier");
buttonModifier.addEventListener('click', function () {
    if (categorieJeu.value != 0) {
        const formJeu = document.querySelector(".jeuform");
        let objet = listeJeux[elementChoisi];
        if (!setPlateformes(objet)) {
            alert("Selectionnez au moins une plateforme!");
            return;
        };
        if (listeJeux.some(a => a.titre == nomDuJeu.value && a.titre != objet.titre) || nomDuJeu.value == "") {
            alert("Ce jeu est déjà sur le site ou le nom est incorrect!")
            return;
        }
        objet.titre = nomDuJeu.value;
        objet.id_categorie = categorieJeu.value;
        objet.url_image = imageDuJeu.value;
        formJeu.classList.replace("jeuform", "formcache");
        backdrop.classList.replace("backdrop", "backdrophidden");
        effacerForm();
        filtrer(listeJeux, tempCategorie, tempPlateforme);
    }
    else {
        alert("SVP selectionnez une catégorie!");
    }

});


let resetCheckbox = function () {
    const inputPlat = document.querySelectorAll(".divPlat input");
    inputPlat.forEach((input) => {
        input.checked = false;
    })
}


const confirmationOui = document.querySelector("#confirmationOui");
confirmationOui.addEventListener('click', function () {
    listeJeux.splice(tempElement, 1);
    backdrop.classList.replace("backdrop", "backdrophidden");
    const message = document.querySelector('.messageAff');
    message.classList.replace("messageAff", "messageConfirmation");
    effacerForm();
    filtrer(listeJeux, tempCategorie, tempPlateforme);

});

const confirmationNon = document.querySelector("#confirmationNon");
confirmationNon.addEventListener('click', function () {
    backdrop.classList.replace("backdrop", "backdrophidden");
    const message = document.querySelector('.messageAff');
    message.classList.replace("messageAff", "messageConfirmation");
    filtrer(listeJeux, tempCategorie, tempPlateforme);

});



for (let i = 0; i < listeJeux.length; i++) {
    if (listeJeux[i].titre != "") {
        const article = afficherJeux(listeJeux[i], listePlateformes);
        document.querySelector(".liste").appendChild(article);
    }
}


let formCategories = function () {
    for (c of listeCategorie) {
        const categorieForm = document.createElement("option");
        categorieForm.setAttribute("value", c.id);
        categorieForm.textContent = c.titre;
        categorieJeu.append(categorieForm);
    }
}
formCategories();






let afficherCategorie = function (categorie) {

    const element = document.createElement("li");

    const image = document.createElement("img");
    const a = document.createElement("a");

    a.textContent = categorie.titre;
    a.href = "index.php?" + categorie.titre;
    a.setAttribute("id", "categorie" + categorie.id);
    a.addEventListener('click', function (event) {
        event.preventDefault();
        tempCategorie = categorie.id;
        filtrer(listeJeux, tempCategorie, tempPlateforme);
        const l1 = "index.php?" + categorie.titre;
        history.pushState(null, null, l1);

    });
    image.src = categorie.url_image;


    element.append(a, image);
    liste.append(element);

    return liste
}
const liste = document.createElement("ul");
document.querySelector("nav").append(liste);
liste.setAttribute("class", "categorie");
for (let i = 0; i < listeCategorie.length; i++) {
    afficherCategorie(listeCategorie[i]);
}

let filtrer = function (listeJeu, idCat, idPlateforme) {
    const jeux = document.querySelectorAll(".jeux");
    jeux.forEach(function (jeu) {
        jeu.remove();
    });
    for (let i = 0; i < listeJeu.length; i++) {
        const checkCat = idCat == "" || listeJeux[i].id_categorie == idCat;
        const checkPlateforme = idPlateforme == "" || listeJeux[i].plateformes.includes(parseInt(idPlateforme));
        if (checkCat && checkPlateforme && listeJeux[i].titre != "") {
            const article = afficherJeux(listeJeux[i], listePlateformes);
            document.querySelector(".liste").appendChild(article);
        }
    }
}

const choixPlateforme = document.querySelector("#deroulant");
choixPlateforme.addEventListener('change', function () {
    tempPlateforme = choixPlateforme.value;
    filtrer(listeJeux, tempCategorie, tempPlateforme);
})
const choixToutes = document.createElement("option");
choixPlateforme.append(choixToutes);
choixToutes.setAttribute("id", "p0");
choixToutes.setAttribute("value", "");
choixToutes.textContent = "--Toutes--";
for (let i = 0; i < listePlateformes.length; i++) {
    const choix = document.createElement("option");
    choixPlateforme.append(choix);
    choix.setAttribute("value", listePlateformes[i].id);
    choix.textContent = listePlateformes[i].titre;
}


const formulaireJeu = document.querySelector("#formulaireJeu");
for (let p = 0; p < listePlateformes.length; p++) {
    const platLabel = document.createElement("label");
    platLabel.setAttribute("for", "checkbox" + listePlateformes[p].id);
    platLabel.textContent = listePlateformes[p].titre;
    const checkboxPlateforme = document.createElement("input");
    const divPlat = document.createElement("div");
    divPlat.setAttribute("class", "divPlat");
    checkboxPlateforme.setAttribute("type", "checkbox");
    checkboxPlateforme.setAttribute("id", "checkbox" + listePlateformes[p].id);
    checkboxPlateforme.setAttribute("name", listePlateformes[p].titre);
    divPlat.append(platLabel, checkboxPlateforme);
    buttonAjouter.parentNode.insertBefore(divPlat, buttonAjouter);

}


const backdrop = document.querySelector(".backdrophidden");
backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) {
        const formJeu = document.querySelector(".jeuform");
        if (formJeu) {
            formJeu.classList.replace("jeuform", "formcache");
        }
        const messageConf = document.querySelector(".messageAff")
        if (messageConf) {
            messageConf.classList.replace("messageAff", "messageConfirmation");
        }
        backdrop.classList.replace("backdrop", "backdrophidden");
        effacerForm();
    }
});
const ajouter = document.querySelector("#ajouterJeu");
ajouter.addEventListener('click', function () {
    const formJeu = document.querySelector(".formcache");
    formJeu.classList.replace("formcache", "jeuform");
    backdrop.classList.replace("backdrophidden", "backdrop");

});


buttonAjouter.addEventListener('click', function () {
    const nouveauJeuForm = document.querySelector(".jeuform");
    let nouveauJeu = {
        "id": 0,
        "titre": "",
        "url_image": "",
        "id_categorie": 0,
        "plateformes": []
    }

    if (listeJeux.some(a => a.titre == nomDuJeu.value) || nomDuJeu.value == "") {
        alert("Ce jeu est déjà sur le site ou le nom est incorrect!")
        return;
    }
    if (categorieJeu.value == 0) {
        alert("SVP selectionnez une catégorie!");
        return;
    }
    nouveauJeu.titre = nomDuJeu.value;
    nouveauJeu.id = listeJeux.length;
    nouveauJeu.url_image = imageDuJeu.value;
    nouveauJeu.id_categorie = categorieJeu.value;
    if (!setPlateformes(nouveauJeu)) {
        alert("Selectionnez au moins une plateforme!");
        return;
    };
    listeJeux.push(nouveauJeu);
    console.log(nouveauJeu);
    nouveauJeuForm.classList.replace("jeuform", "formcache");
    backdrop.classList.replace("backdrop", "backdrophidden");
    filtrer(listeJeux, tempCategorie, tempPlateforme);
    effacerForm();


});

let effacerForm = function () {
    const title = document.querySelector("#nomDuJeu");
    const url = document.querySelector("#imageDuJeu");
    categorieJeu.value = 0;
    resetCheckbox();
    title.value = "";
    url.value = "";
}
