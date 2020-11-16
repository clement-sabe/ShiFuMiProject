$(function () {
  $(".answer").draggable({
    revert: true,//Renvoie l'élément toujours à sa place
    snap: '#emptyBlock',//Elles sont attirées par le bloc droppable
    snapMode: 'inner' // Permet le magnétisme sur l'interieur du block

  });
});

$("#emptyBlock").droppable({
  accept: ".answer", //Le bloc n'accepte de recevoir que les blocs avec la classe answer


  // Permet le magnétisme sur l'interieur du block
});


const buttons = document.querySelectorAll(".answer");
// const resultat = document.querySelector(".resultat");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";
    // resultat.innerHTML = joueur + "       " + robot;
    if (joueur === robot) {
      resultat = "Egalité";
    }
    else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles") && (robot === "Pierre")) {
      resultat = "Gagné";
    }
    else {
      resultat = "Perdu";
    }
    document.querySelector("#winLose").innerHTML = `
  
  <p> Résultat : ${resultat}</p>
`  ;

    document.querySelector("#randomBlock").innerHTML = `
  <p> Robot : ${robot} </p>
  `  ;

    document.querySelector("#dropHere").innerHTML = `
  <p> Joueur : ${joueur} </p>
  `  ;

  });


}