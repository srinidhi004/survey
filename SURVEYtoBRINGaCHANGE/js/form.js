class Form {
    constructor(){
        var go = createButton("GO");
        go.position(displayWidth/2+50, displayHeight/2+25);
    }

    display(){
        var title= createElement('h3');
        title.html("Helping Hands");
        title.position(displayWidth/2,0);
        var input= createInput("name");
        input.position(displayWidth/2-30, displayHeight/2-90);
        var email = createInput("email id");
        email.position(displayWidth/2-30,displayHeight/2-60);
        var greeting= createElement('h3');
        var button= createButton("Start survey");
        button.position(displayWidth/2+50, displayHeight/2+25);
        
       
        var intro= createElement('h2');
        intro.position(displayWidth/3,60);

         button.mousePressed(function(){
             input.hide();
             email.hide();
             button.hide();
           //  go.display();
            var name= input.value();
            
            voter.update(name);
            voter.update(email);
            
           intro.html("In this survey, you will have to answer 5 questions. Your vote plays a significant role in bringing a change.")
             greeting.html("Hello "+ name);
             greeting.position(displayWidth/2-50,20) ;

            // greeting (email);
            // greeting.position(displayWidth/2-50,30);
            });
       go.mousePressed(function(){
            go.hide();
            q1.display();
        });

        
    }



}