importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyAPDsygXMO6pzkbtiOOLI-EFEkMEowk3HM",
    authDomain: "pwamessagereact.firebaseapp.com",
    projectId: "pwamessagereact",
    storageBucket: "pwamessagereact.appspot.com",
    messagingSenderId: "891437248765",
    appId: "1:891437248765:web:607104c23b828b0de1ce94"
});

firebase.messaging();
