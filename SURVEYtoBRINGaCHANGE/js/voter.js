class Voter {
    constructor(){

    }
    getCount(){
        var countref= database.ref('voterCount');
        countref.on("value", function(data){
            voteCount= data.val();
        });
      }
      updateCount(){
          database.ref('/').update({
              voteCount :count
          });
        } 

        
}
