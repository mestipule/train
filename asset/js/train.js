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
      var minutesAway = 
      console.log(trainName);
      console.log(trainDestination);
      console.log(trainFirstArrival);
      console.log(trainFreq);
      var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainFirstArrival),
        $("<td>").text(trainFreq)
      );
      $("#new-train > tbody").append(newRow);
      
    });
  
    var currentTime = 0;
    var nextTrain = 0;
    var trainFrequency = trainFreq;
    var trainCounter = 0;
    var waitTime = 0;

    currentTime = trainFirstArrival;
    nextTrain = currentTime + 30;
    
    while( nextTrain < currentTime){
      nextTrain += trainFreq;
    }
    (nextTrain == currentTime); //true maybe
    waitTime = nextTrain - currentTime;
    nextHour = Math.floor(nextTrain/60);
    nextMinute = Math.floor(nextTrain% 60);
    //return hours + ":" + minutes;
    
    // return '$(nextHour)':'(nextMinutes)';

