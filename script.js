//Générer un nombre aléatoire
//Donner à l'utilisateur la capacité de deviner/jouer
//Faire deviner l'utilisateur et s'il a faux, on lui fait recommencer le jeu en lui donnant des indications.
//S'il gagne on stoppe

//Création de la fonction guess
// Nombre entre 0 et 20
function guessGame() {
  let randomNr = Math.floor(Math.random() * 21);
  let guess;
  console.log(randomNr);

  do {
    // guess = prompt("Devine un nombre entre 0 et 20");
    // console.log(guess, randomNr);

    // Si le nombre entré par l'utilisateur est + petit ou - grand :
    if (randomNr > guess) {
      console.log("C'est plus grand !");
    } else if (randomNr < guess) {
      console.log("C'est moins grand !");
    }
  } while (guess != randomNr);
}

//Appeler la fonction pour l'éxécuter
guessGame();

// Création de tableau pour stocker les nombrtes

let numbers = [];

// On sélectionne les éléments du DOM dont on a besoin

const numberInput = document.getElementById("numberInput");
const addNumberBtn = document.getElementById("addNumberBtn");
const numberList = document.getElementById("numberList");

// On ajoute un écouteur d'événement sur le bouton "Ajouter"

addNumberBtn.addEventListener("click", () => {
  //Récupère la valeur siasie et retire les espaces superflus

  const newNumber = numberInput.ariaValueMax.trim();

  // Si la saisie n'est pas vide, on ajoute la tâche au tableau

  if (newNumber !== "") {
    numbers.push(newNumber);

    //On met à jour l'affichage des nombres

    renderNumbers();
  }
});

/**
 * Fonction qui affiche la liste des nombres saisis à l'écran
 * Elle parcourt le tableau numbers et crée un <li> pour chaque élément
 */

function renderNumbers() {
  //On vide d'abbord la liste existante

  numberList.innerHTML = "";

  // Pour chaque tâche dans le tableau...
  numbers.forEach((number, index) => {
    // ...on crée un élément de liste
    const li = document.createElement("li");
    li.textContent = number;
  });
}
