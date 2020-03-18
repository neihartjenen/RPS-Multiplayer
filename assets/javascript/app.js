  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCv4Ttm39TVSrP4-BH6PtVLrRAK2Xvp540",
    authDomain: "trainschedule-dd198.firebaseapp.com",
    databaseURL: "https://trainschedule-dd198.firebaseio.com",
    projectId: "trainschedule-dd198",
    storageBucket: "trainschedule-dd198.appspot.com",
    messagingSenderId: "465236227733",
    appId: "1:465236227733:web:d6e7666e35982482060d9c"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  
    $("#add-train-btn").on("click", function (event) {
    event.preventDefault();
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firtsTrainDeparts = moment($("#firstTrain-input").val().trim(), "MM/DD/YYYY").format("X");
    var departsEvery = $("#every-input").val().trim();
   
     var newTrain = {
        name: trainName,
        destination: trainDest,
        first: firstTime,
        departs: departsEvery,
      };
      database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
     console.log(newTrain.departs);

  alert("train successfully added");
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#first-input").val("");
      $("#departs-input").val("");
    });
    // clear //
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-input").val("");
    $("#departs-input").val("");
  });
  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
  
    console.log(trainName);
    console.log(trainDest);
    console.log(firstTime);
    console.log(departsEvery);
  
