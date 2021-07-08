
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
roomname=localStorage.getItem("The-Room");

function Logout(){
    window.location="index.html";
    localStorage.removeItem("The-Name");
    localStorage.removeItem("The-Room");
}

function Send(){
    sms= document.getElementById("EnterMessage").value;
    firebase.database().ref(roomname).push({
        name:username,
        message:sms,
        like:0
    });
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("messages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
     childData = childSnapshot.val();
      if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
console.log(firebase_message_id);
 console.log(message_data);
  name= message_data['name'];
   message = message_data['message'];
    like = message_data['like'];
     name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
       like_button ="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
        row = name_with_tag + message_with_tag +like_button + span_with_tag;
        document.getElementById("messages").innerHTML+=row;
    } }); }); } getData();

