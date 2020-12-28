// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDoDBeWzuTU7I4BKosYE_onFemUHMTXBHM",
    authDomain: "project93-a209c.firebaseapp.com",
    databaseURL: "https://project93-a209c-default-rtdb.firebaseio.com",
    projectId: "project93-a209c",
    storageBucket: "project93-a209c.appspot.com",
    messagingSenderId: "885718918779",
    appId: "1:885718918779:web:1d9a8fb024291d9367a4de",
    measurementId: "G-3PFV6H9KXE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";

}

//YOUR FIREBASE LINKS

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();