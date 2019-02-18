var config = {
    apiKey: "AIzaSyC4LSlDCYjNEs256LrPyrrgT1RaUbVW27g",
    authDomain: "trainproject-89361.firebaseapp.com",
    databaseURL: "https://trainproject-89361.firebaseio.com",
    projectId: "trainproject-89361",
    storageBucket: "trainproject-89361.appspot.com",
    messagingSenderId: "835577510046"
  };
  
firebase.initializeApp(config);

var database = firebase.database();
    



     $("#form").on("submit", function (event) {
       console.log("entering submit");
       event.preventDefault();
        
        var memNam = $("#memberName").val().trim();
        var dest = $("#destin").val().trim();
        var nexAr = $("#time").val().trim();
        var freq = $("#freq").val().trim();
        var newTrain = {
          name: memNam,
          destination: dest,
          arrival: nexAr,
          frequency: freq,
          
        };
        database.ref().push(newTrain);
        $("#memberName").append(memNam);
        $("#destin").append(dest);
        $("#time").append(nexAr);
        $("#freq").append(freq);
        // freq.text("frequent");
        console.log(memNam);
        console.log(dest);
        console.log(nexAr);
        console.log(freq); 
        $("#memberName").val("");
        $("#destin").val("");
        $("#time").val("");
        $("#freq").val("");
        
         });
    database.ref().on("child_added", function(childSnapshot){
      console.log(childSnapshot.val());
      var trainName = childSnapshot.val().name;
      var trainDestination = childSnapshot.val().destination;
      var trainFirstArrival = childSnapshot.val().arrival;
      var trainFreq = childSnapshot.val().frequency;
      // var minutesAway = 
      var currentTime = 0;
      var now = new Date();
      currentTime = now.getHours()*60 + now.getMinutes();
      var firstTrainTime = parseInt(trainFirstArrival.split(":")[0]*60) + parseInt(trainFirstArrival.split(":")[1]);
      // firstTrainTime = trainFirstArrival.split(":")[0]*60 + trainFirstArrival.split(":")[1];
      var nextTrain = 0;
      var trainFrequency = parseInt(trainFreq);
      // var trainCounter = 0;
      var waitTime = 0;
      nextTrain = firstTrainTime;

      while( nextTrain < currentTime){
        nextTrain += trainFrequency;
      }
      waitTime = nextTrain - currentTime;
      nextHour = Math.floor(nextTrain/60);
      nextMinute = Math.floor(nextTrain% 60);
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainFirstArrival);
        console.log(trainFreq);
        var newRow = $("<tr>").append(
          $("<td>").text(trainName),
          $("<td>").text(trainDestination),
          $("<td>").text(nextHour + ":" + nextMinute),
          $("<td>").text(trainFreq),
          $("<td>").text(waitTime)
        );
        $("#new-train > tbody").append(newRow);
      
    });
  
    
    //return hours + ":" + minutes;
    
    // return '$(nextHour)':'(nextMinutes)';

