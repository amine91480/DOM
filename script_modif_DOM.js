
// Modification n°1
// Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
// Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
let changeTitles = () => {
  //First
  titleAttribut = document.getElementsByTagName('h1');
  newTitleAttribut = "Ce que j'ai appris à THP"
  titleAttribut[0].innerText = newTitleAttribut ;
  // NEXT
  let newP = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
  pAttibut = document.querySelectorAll('div.container > p')
  pAttibut[0].innerHTML = newP
  // console.log(document.querySelectorAll('div.container > p')[0].innerHTML)
}
// Modification n°2
// Changer le texte du bouton "Main call to action" en "OK je veux tester !"
// Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
// Changer le texte du bouton "Secondary action" en "Non Merci"
// Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"
let changeCallToAction = () => {
  let aAttribut = document.querySelectorAll('div.container > p > a');
  let linkPrimary = "http://www.thehackingproject.org" ;
  let linkSecondary = "https://www.pole-emploi.fr/accueil/" ;
  let textlinkPrimary = "OK je veux tester !";
  let textlinkSecondary = "Non Merci";
  // console.log(aAttribut[0]);
  aAttribut[0].innerHTML = textlinkPrimary; 
  aAttribut[0].href = linkPrimary;
  aAttribut[1].innerHTML = textlinkSecondary ;
  aAttribut[1].href = linkSecondary
}

// Modification n°3
// Change "Album" par "The THP Experience" ;
// Change la taille du texte pour le passer en 2em.
let changeLogoName = () => {
  logoAttribut = document.querySelector('header > div > div > a > strong') ;
  // console.log(logoAttribut) ;
  let newLogoAttribut = "The THP Experience" ;
  logoAttribut.innerHTML = newLogoAttribut ;
  logoAttribut.style.fontSize = '2em';
  // console.log(logoAttribut.style.fontSize);
}

//Modification n°4
//Ecris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :
let populateImages = () => {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  let cardsttribut = document.getElementsByClassName('card-img-top')
  // console.log(imageAttribut);
  for (i = 0; i < imagesArray.length; i++) {
    cardsttribut[i].src = imagesArray[i]
    // console.log(`Add image -> ${i}`)
  }
}

//Modification n°5
// Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle.
let deleteLastCards = () => {
  let cardAttribut = document.getElementsByClassName('card mb-4 box-shadow')
  let y = cardAttribut.length ;
  for (i = (y - 1); i > (y - 4) ; i --) {
    cardAttribut[i].parentElement.removeChild(cardAttribut[i])
    // console.log([cardAttribut])
  }
}

//Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :
//Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
//Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
//Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
let changeCardsText = () => {
  let cardTXT = document.getElementsByClassName('card-text') ;
  let CardTextHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
  let cardTextCSS = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
  let cardTextJS = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
  let Text = [CardTextHTML,cardTextCSS,cardTextJS];
//  console.log(cardTXT[0].innerText);
 for(i = 0 ; i < 3 ; i++ ) {
   cardTXT[i].innerText = Text[i]
 }
}
//Modification n°7
//Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !
let changeViewButtons = () => {
  let buttonViewAttribut = document.getElementsByClassName('btn btn-sm btn-outline-secondary') ;
  // console.log(buttonViewAttribut);
  for(i = 0; i < buttonViewAttribut.length; i++) {
    if (buttonViewAttribut[i].innerText = "View"){
      buttonViewAttribut[i].className = "btn btn-sm btn-success"
    }
  }
}

//Modification n°8
//Allez, on finit sur une modification un peu tordue :
//Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
//Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
//Elle est pas belle cette pyramide inversée en front 👳? (comment ça "obsédés par les pyramides" ?).
let changeToPyramide = () => {
  // Création d'une Div avec la classeNameRow
  let divRow = document.createElement('div');
  divRow.className = "row"
  // console.log(divRow);

  //Récuperération de la div Container qui englobe la partie principal de la page et Ajout de la 2ème div Roiw dedans :D
  let divContainer = document.querySelectorAll('div.container');
  divContainer = divContainer[3];
  divContainer.appendChild(divRow);
  // console.log(divContainer);

  //Récupération de la carte Js[3] dans le tabkleau de Carte
  let cardTree = document.getElementsByClassName('col-md-4');
  cardTree = cardTree[2];
  // console.log(cardTree);
  
  //Deplacer la Troisième card JS vers 2ème Div Row crée et ajouter dans le container -> Pyramide réussi
  divRow.appendChild(cardTree);
}

changeTitles()
changeCallToAction()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText();
changeViewButtons();
changeToPyramide(); 