var firebaseConfig = {
  apiKey: "AIzaSyCGTWBHIcl37EumiPvdOCcy4HkoXKcnod4",
  authDomain: "ashter-f8728.firebaseapp.com",
  databaseURL: "https://ashter-f8728-default-rtdb.firebaseio.com",
  projectId: "ashter-f8728",
  storageBucket: "ashter-f8728.appspot.com",
  messagingSenderId: "948683896669",
  appId: "1:948683896669:web:6ffa74c2352b997e869ab4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " to my Kwitter app";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"addingRoomName"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("room_name-" + Room_names);
  row = "<div class='room_name' id=" + Room_names + " onclick='redirect_to_room_name(this.id)'#>" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;
});});}
getData();

function redirect_to_room_name(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}