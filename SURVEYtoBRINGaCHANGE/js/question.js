class Question {

constructor(){

}

display(){
    var q1= createElement('h2');
    q1.position(dispalyWidth/2- 50,90);
    q1.html(" Do you wish to help those who are starving?");
    var q2= createElement('h2');
    q2.position(displayWidth/2- 50, 100);
    q2.html("Do you wish to donate your old books to the underprevilaged?")
    var next= createButton(">")
    next.position(displayWidth/2+50, displayHeight/2+25);

}


}