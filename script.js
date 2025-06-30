// On récupère les éléments du DOM
const numberInput = document.getElementById("numberInput");
const addNumberBtn = document.getElementById("addNumberBtn");
const numberList = document.getElementById("numberList");
const essais = document.getElementById("essais");
const answer = document.getElementById("answer");
const newGame = document.getElementById("newGame");

// const valeur = parseInt(numberInput.value, 10);
let numbers = [];
let nbEssais = 0;

// Création du nombre aléatoire
const randomNr = Math.floor(Math.random() * 20) + 1;
console.log(randomNr);

/*
 *Création des actions du bouton "Vérifier"
 *Création des comparaisons avec les conditions
 *Création de la section essai
 */

addNumberBtn.addEventListener("click", () => {
  const newNumber = numberInput.value.trim();
  nbEssais = nbEssais + 1;
  essais.textContent = "Essai n°" + nbEssais;

  if (newNumber >= 0 && newNumber <= 20 && newNumber !== "") {
    numbers.push(newNumber);
    renderNumbers();
    numberInput.value = ""; // vider le champ après ajout

    //Comparaisons
    if (randomNr > newNumber) {
      answer.textContent = "Tu chauffes... C'est plus grand !";
      answer.style.color = "red";
    } else if (randomNr < newNumber) {
      answer.textContent = " Tu refroidis... C'est plus petit !";
      answer.style.color = "red";
    } else if (randomNr == newNumber) {
      answer.textContent = " Bravo, tu as réussi !";
      answer.style.color = "rgb(90, 255, 101)";
      newGameFunc();
    }
  } else {
    answer.textContent = "Entre un nombre compris entre 0 et 20 !";
    answer.style.color = "red";
  }
});

// Création de la fonction du bouton rejouer
function newGameFunc() {
  newGame.style.display = "block";

  newGame?.addEventListener("click", () => {
    window.location.reload();
  });
}

//Création de la fonction pour créer les listes
function renderNumbers() {
  numberList.innerHTML = "";

  numbers.forEach((number) => {
    const li = document.createElement("li");
    li.textContent = number;
    numberList.appendChild(li);
  });
}
