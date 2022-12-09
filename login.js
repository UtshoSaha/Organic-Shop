
var firebaseConfig = {
    apiKey: "AIzaSyB0illakAqxJ6i3v0XruiOZmzi0WJTW5KA",
    authDomain: "organic-shop-edb78.firebaseapp.com",
    projectId: "organic-shop-edb78",
    storageBucket: "organic-shop-edb78.appspot.com",
    messagingSenderId: "300842096569",
    appId: "1:300842096569:web:5b4db1103d63b45eed8868",
    measurementId: "G-C8Q2HYKHY1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//signup function
function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    //
    promise.catch(e => alert(e.message));
    alert("SignUp Successfully");
}

//signIN function
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));


    window.location.href = './index.html';



}

//signOut

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);

    } else {
        alert("No Active user Found")
    }
})