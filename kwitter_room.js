
var firebaseConfig = {
      apiKey: "AIzaSyDvySlYJjNPKPrdINvpp2MZGMrphfNqiB0",
      authDomain: "kwitter-firebase-c5033.firebaseapp.com",
      databaseURL: "https://kwitter-firebase-c5033-default-rtdb.firebaseio.com",
      projectId: "kwitter-firebase-c5033",
      storageBucket: "kwitter-firebase-c5033.appspot.com",
      messagingSenderId: "663784819380",
      appId: "1:663784819380:web:4ca8274daba9d8a41565e1"
    };
    firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("The-Name");

function Add(){
      RoomName=document.getElementById("Room").value;
      firebase.database().ref("/").child(RoomName).update({ purpose : "adding room name" });
      localStorage.setItem("The-Room", RoomName);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("Trending").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      row="<div id='"+Room_names+"'onclick='Redirect(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("Trending").innerHTML+=row;
      //End code
      });});}
getData();

function Previous(){
      window.location="index.html";
      window.alert="You want to leave so soon? Thats sad. Well come back soon then "+username;
}

function Redirect(name){
      localStorage.setItem("The-Room",name);
      window.location="kwitter_page.html";
}
