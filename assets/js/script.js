$(document).ready(function(){
  //Déclaration de la variable tableau ordi
  var board = ['Pierre', 'Feuille', 'Ciseaux'];
  //Déclaration des variables compteur de victoires/défaites/essais/userMove qui sont à 0/null au début
  var champions = 0;
  var looser = 0;
  var tryCount = 0;
  var userMove = null;
 

//...Bouton Réinitialiser...
$('#reset').click(function(){
  champions = 0;
  looser = 0;
  tryCount = 0;
  $('#victory').text('Joueur : ' + champions);
  $('#defeat').text('Ordinateur : ' + looser);
  $('#test').text('');
  $('#random').css('background-image', 'none');
  $('#winLose').text('');
});
//...Rend les réponses draggables...
$(".reply").draggable({
  revert : true , //Renvoie l'élément toujours à sa place
  revertDuration: 200,
  snap : '#empty',//Elles sont attirées par le bloc droppable
  snapMode: 'inner' // Permet le magnétisme sur l'interieur du block
});
//Quand le clic de la souris se relève, ça fait passer userMove de null à "Pierre", "Feuille" ou "Ciseaux" selon le bloc qui est cliqué
$('#carapace').mouseup(function(){
  userMove = 'Pierre';
});
$('#pizza').mouseup(function(){
  userMove = 'Feuille';
});
$('#sai').mouseup(function(){
  userMove = 'Ciseaux';
});

//..Rend le "déposez ici" droppable.
$( "#empty" ).droppable({
  accept: ".reply", //Le bloc n'accepte de recevoir que les blocs avec la classe answer
  
  classes: {
      "ui-droppable-active": "ui-state-default"
  },
  //...Une fois qu'on drop un élément dans "emptyBlock", cette fonction se déclenche.....
  drop:function(){
      //Choisis au hasard une valeur dans le tableau déclaré plus haut
      var ordiMove = board[Math.floor(board.length * Math.random())];
      //Met les images correspondantes au choix de l'ordi sur randomBlock
      if (ordiMove == "Pierre"){
          $('#random').css({'background-image': 'url(assets/img/carapace.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
      } else if (ordiMove == "Feuille"){
          $('#random').css({'background-image': 'url(assets/img/pizza.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
      } else if (ordiMove == "Ciseaux"){
          $('#random').css({'background-image': 'url(assets/img/sai.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
      }
      //Conditions
      //SI USER = ORDI, alerte Egalité, +1 compteur d'essais
      if (userMove == ordiMove){
          tryCount++;
          champions = champions + 0;
          $('#winLose').text('Egalité!');
          $('#winLose').css('color', '#f2a500');
          //SINON SI USER = Pierre et ORDI = Ciseaux, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
      } else if (userMove == 'Pierre' && ordiMove == 'Ciseaux'){
        champions++;
          tryCount++;
          $('#winLose').text('Gagné!');
          $('#winLose').css('color', 'green');
          //SINON SI USER = Feuille et ORDI = Pierre, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
      } else if (userMove == 'Feuille' && ordiMove == 'Pierre'){
        champions++;
          tryCount++;
          $('#winLose').text('Gagné!');
          $('#winLose').css('color', 'green');
          //SINON SI USER = Ciseaux et ORDI = Feuille, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
      } else if (userMove == 'Ciseaux' && ordiMove == 'Feuille'){
        champions++;
          tryCount++;
          $('#winLose').text('Gagné!');
          $('#winLose').css('color', 'green');
          //SINON SI ORDI = Pierre et USER = Ciseaux, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Pierre' && userMove == 'Ciseaux'){
        looser++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
          //SINON SI ORDI = Feuille et USER = Pierre, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Feuille' && userMove == 'Pierre'){
        looser++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
          //SINON SI ORDI = Ciseaux et USER = Feuille, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Ciseaux' && userMove == 'Feuille'){
        looser++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
      }
      //Textes nombre de victoires, nombre de défaites et pourcentage de victoires
      $('#victory').text('Joueur : ' + champions);
      $('#defeat').text('Ordinateur : ' + looser);
      $('#test').text(Math.floor(champions/tryCount*100) + '% de réussite');
      //Fait apparaître le bouton réinitialiser après avoir joué le premier coup
      $('#reset').css('display', 'bloc');
      //Au mouseover sur une carte réponse, la carte ordi redevient blanche
      $('.reply').mousedown(function(){
          $('#random').css('background-image', 'none');
      });
  }
});
});
function setNewImage(){
  document.getElementById("player").src = "assets/img/tthover.png"}
  $('#player').css('height', '425px', 'width', '355px');
function setOldImage(){
  document.getElementById("player").src = "assets/img/ttnm.png"
}