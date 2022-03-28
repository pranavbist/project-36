var canvas, backgroundImage;

var questions;
var gameState
var question, contestant, quiz, play;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
  play = new Quiz();
  play.start();
}



function draw(){
  background("pink");

}
