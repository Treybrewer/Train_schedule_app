
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBJIBkDahW7LZJ2SzlY1nfZwQ2H6iHJGD8",
  authDomain: "database-project1-31fcc.firebaseapp.com",
  databaseURL: "https://database-project1-31fcc.firebaseio.com",
  projectId: "database-project1-31fcc",
  storageBucket: "database-project1-31fcc.appspot.com",
  messagingSenderId: "1086742283789"
};
firebase.initializeApp(config);
var database = firebase.database();
var appObj = {
  TrainApp: {
    trainName: "",
    Destination: "",
    Frequency: "",

  },
  createTrain: function (event) {
    var index = 0;
    index += 1;
    firebase.database().ref('users/TrainApp/').update({


      trainName: $(".trainName").val(),
      Destination: $(".destination").val(),
      Frequency: $(".frequency").val(),




    });
    database.ref('users/TrainApp/').once("value", function (snapshot) {
      console.log(snapshot.val());
      console.log(snapshot.val().trainName);
      var newTrainName = snapshot.val().trainName;
      var newDestination = snapshot.val().Destination;
      var newFrequency = snapshot.val().Frequency;
      var time = moment().add(newFrequency, "minutes");
      var newTime = time.format('h:mm: a');
      var tr = $("<tr class='table-row'>");
      var th = $("<th scope = 'row'>")
      var td = $("<td>");
      var td2 = $("<td class='td2'>");
      var td3 = $("<td class = 'td3'>");
      var td4 = $("<td class = 'td4'>");
      td.append(newDestination);
      td2.append(newFrequency);
      td3.append(newTime);
      td4.append(time.fromNow());
      th.append(newTrainName);
      tr.append(th, td, td2, td3, td4);

      $(".main-table").append(tr);



    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  },
  postTrain: function (event) {

  },
  submitButton: function (event) {
    var time = moment().add(12, "minutes");
    var newTime = time.format('h:mm: a');
    $(".td3").append(newTime);
    $(".td4").append(time.fromNow());
    var submit = $("<button>");
    submit.addClass("submitbutton");
    submit.text('Submit');
    $(".tbody").append(submit);
    submit.on("click", appObj.createTrain);

  },
  // submitButton()
};
