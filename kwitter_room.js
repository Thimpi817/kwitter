
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCtFsawzbe4oH3kDEHCIP5NH-l80_5E-DY",
      authDomain: "classtest-3eaf1.firebaseapp.com",
      databaseURL: "https://classtest-3eaf1-default-rtdb.firebaseio.com",
      projectId: "classtest-3eaf1",
      storageBucket: "classtest-3eaf1.appspot.com",
      messagingSenderId: "941399701990",
      appId: "1:941399701990:web:aba7b03ffa9f97d6c63e27"
    };

    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "welcome " + user_name + "!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update
      ({purpose : "adding room name"});

      localStorage.setItem("room_name",room_name);
      
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}

      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name" , name);
            window.location="kwitter_page.html";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }
getData();

