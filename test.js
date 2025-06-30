//Générer un nombre aléatoire
//Donner à l'utilisateur la capacité de deviner/jouer
//Faire deviner l'utilisateur et s'il a faux, on lui fait recommencer le jeu en lui donnant des indications.
//S'il gagne on stoppe

//Création de la fonction guess
// Nombre entre 0 et 20
function guessGame() {
  let randomNr = Math.floor(Math.random() * 20) + 1;
  console.log(randomNr);
  let guess;

  do {
    guess = prompt("Devine un nombre entre 0 et 20"); // décommenté pour que l'utilisateur entre une valeur
    if (randomNr > guess) {
      console.log("C'est plus grand !");
    } else if (randomNr < guess) {
      console.log("C'est moins grand !");
    }
  } while (guess != randomNr);
  console.log("Bravo, tu as trouvé !");
}

guessGame();

let numbers = [];

addNumberBtn.addEventListener("click", () => {
  const newNumber = numberInput.value.trim();

  if (newNumber !== "") {
    numbers.push(newNumber);
    renderNumbers();
    numberInput.value = ""; // vider le champ après ajout
  }
});

function renderNumbers() {
  numberList.innerHTML = "";

  numbers.forEach((number) => {
    const li = document.createElement("li");
    li.textContent = number;
    numberList.appendChild(li);
  });
}
