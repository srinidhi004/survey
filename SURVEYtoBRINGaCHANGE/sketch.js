var database;
var surveyState=0;
var voteCount;
var form,question,survey,voter;
var q1,q2,q3,q4,q5;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(displayWidth, displayHeight);
    survey= new Survey();
    survey.getState();
    survey.start();
}

    function draw(){

    }
