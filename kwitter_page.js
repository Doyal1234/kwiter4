const firebaseConfig = {
    apiKey: "AIzaSyCVnDXuwoDwAzBouAprmWAm1kvRy3_IgQk",
    authDomain: "kwitter-c93-project.firebaseapp.com",
    databaseURL: "https://kwitter-c93-project-default-rtdb.firebaseio.com",
    projectId: "kwitter-c93-project",
    storageBucket: "kwitter-c93-project.appspot.com",
    messagingSenderId: "419595676669",
    appId: "1:419595676669:web:a67c6b0618ecf0c8fd4794"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name")
var room_name=localStorage.getItem("room_name");

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value="";
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
    //Start code
    
    //End code
          } });  }); }
    getData();
    
    function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
    }