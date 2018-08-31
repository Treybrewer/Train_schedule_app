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
  },
  submitButton: function (event) {
    var submit = $("<button>");
    submit.addClass("submitbutton");
    submit.text('Submit');
    $(".tbody").append(submit);
    submit.on("click", appObj.createTrain);

  },
  // submitButton()
};
