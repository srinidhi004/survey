class Survey {
    constructor(){

    }
    getState(){
       var surveystateref = database.ref('surveyState');
       surveystateref.on("value", function(data){
        surveyState= data.val;
       });
    }
    update(name){
        database.ref('/').update({
            name:name
        });
    }
    start(){
        if(surveyState===0){
            voter=new Voter();
            voter.getCount();
            form= new Form();
            form.display();
            
        }
    }
}

