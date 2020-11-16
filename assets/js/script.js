$(document).ready(function(){
  //Déclaration de la variable tableau ordi
  var array = ['Pierre', 'Feuille', 'Ciseaux'];
  //Déclaration des variables compteur de victoires/défaites/essais/userMove qui sont à 0/null au début
  var wins = 0;
  var loses = 0;
  var tryCount = 0;
  var userMove = null;
 

//...Bouton Réinitialiser...
$('#tryAgain').click(function(){
  wins = 0;
  loses = 0;
  tryCount = 0;
  $('#victory').text('Joueur : ' + wins);
  $('#defeat').text('Ordinateur : ' + loses);
  $('#try').text('');
  $('#randomBlock').css('background-image', 'none');
  $('#winLose').text('');
});
//...Rend les réponses draggables...
$(".answer").draggable({
  revert : true,//Renvoie l'élément toujours à sa place
  snap : '#emptyBlock',//Elles sont attirées par le bloc droppable
  snapMode: 'inner' // Permet le magnétisme sur l'interieur du block
});
//Quand le clic de la souris se relève, ça fait passer userMove de null à "Pierre", "Feuille" ou "Ciseaux" selon le bloc qui est cliqué
$('#firstCard').mouseup(function(){
  userMove = 'Pierre';
});
$('#secondCard').mouseup(function(){
  userMove = 'Feuille';
});
$('#thirdCard').mouseup(function(){
  userMove = 'Ciseaux';
});

//..Rend le "déposez ici" droppable.
$( "#emptyBlock" ).droppable({
  accept: ".answer", //Le bloc n'accepte de recevoir que les blocs avec la classe answer
  
  classes: {
      "ui-droppable-active": "ui-state-default"
  },
  //...Une fois qu'on drop un élément dans "emptyBlock", cette fonction se déclenche.....
  drop:function(){
      //Choisis au hasard une valeur dans le tableau déclaré plus haut
      var ordiMove = array[Math.floor(array.length * Math.random())];
      //Met les images correspondantes au choix de l'ordi sur randomBlock
      if (ordiMove == "Pierre"){
          $('#randomBlock').css({'background-image': 'url(assets/img/carapace.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
      } else if (ordiMove == "Feuille"){
          $('#randomBlock').css({'background-image': 'url(assets/img/pizza.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
      } else if (ordiMove == "Ciseaux"){
          $('#randomBlock').css({'background-image': 'url(assets/img/sai.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
      }
      //Conditions
      //SI USER = ORDI, alerte Egalité, +1 compteur d'essais
      if (userMove == ordiMove){
          tryCount++;
          wins = wins + 0;
          $('#winLose').text('Egalité!');
          $('#winLose').css('color', '#f2a500');
          //SINON SI USER = Pierre et ORDI = Ciseaux, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
      } else if (userMove == 'Pierre' && ordiMove == 'Ciseaux'){
          wins++;
          tryCount++;
          $('#winLose').text('Gagné!');
          $('#winLose').css('color', 'green');
          //SINON SI USER = Feuille et ORDI = Pierre, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
      } else if (userMove == 'Feuille' && ordiMove == 'Pierre'){
          wins++;
          tryCount++;
          $('#winLose').text('Gagné!');
          $('#winLose').css('color', 'green');
          //SINON SI USER = Ciseaux et ORDI = Feuille, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
      } else if (userMove == 'Ciseaux' && ordiMove == 'Feuille'){
          wins++;
          tryCount++;
          $('#winLose').text('Gagné!');
          $('#winLose').css('color', 'green');
          //SINON SI ORDI = Pierre et USER = Ciseaux, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Pierre' && userMove == 'Ciseaux'){
          loses++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
          //SINON SI ORDI = Feuille et USER = Pierre, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Feuille' && userMove == 'Pierre'){
          loses++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
          //SINON SI ORDI = Ciseaux et USER = Feuille, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Ciseaux' && userMove == 'Feuille'){
          loses++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
      }
      //Textes nombre de victoires, nombre de défaites et pourcentage de victoires
      $('#victory').text('Joueur : ' + wins);
      $('#defeat').text('Ordinateur : ' + loses);
      $('#try').text(Math.floor(wins/tryCount*100) + '% de réussite');
      //Fait apparaître le bouton réinitialiser après avoir joué le premier coup
      $('#tryAgain').css('display', 'block');
      //Au mouseover sur une carte réponse, la carte ordi redevient blanche
      $('.answer').mousedown(function(){
          $('#randomBlock').css('background-image', 'none');
      });
  }
});
});












// $(function () {
//   $(".answer").draggable({
//     revert: true,//Renvoie l'élément toujours à sa place
//     snap: '#emptyBlock',//Elles sont attirées par le bloc droppable
//     snapMode: 'inner' // Permet le magnétisme sur l'interieur du block

//   });
// });

// $("#emptyBlock").droppable({
//   accept: ".answer", //Le bloc n'accepte de recevoir que les blocs avec la classe answer
  

//   // Permet le magnétisme sur l'interieur du block
// });


// const buttons = document.querySelectorAll(".answer");
// // const resultat = document.querySelector(".resultat");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('droppable', function () {
//     const joueur = buttons[i].innerHTML;
//     const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
//     let resultat = "";
//     // resultat.innerHTML = joueur + "       " + robot;
//     if (joueur === robot) {
//       resultat = "Egalité";
//     }
//     else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles") && (robot === "Pierre")) {
//       resultat = "Gagné";
//     }
//     else {
//       resultat = "Perdu";
//     }
//     document.querySelector("#winLose").innerHTML = `
  
//   <p> Résultat : ${resultat}</p>
// `  ;

//     document.querySelector("#randomBlock").innerHTML = `
//   <p> Robot : ${robot} </p>
//   `  ;

//     document.querySelector("#dropHere").innerHTML = `
//   <p> Joueur : ${joueur} </p>
//   `  ;

//   });


// }