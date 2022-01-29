import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from "firebase/messaging";
import { getDatabase, ref, set } from 'firebase/database'

const config = {
    apiKey: "AIzaSyAPDsygXMO6pzkbtiOOLI-EFEkMEowk3HM",
    authDomain: "pwamessagereact.firebaseapp.com",
    projectId: "pwamessagereact",
    storageBucket: "pwamessagereact.appspot.com",
    messagingSenderId: "891437248765",
    appId: "1:891437248765:web:607104c23b828b0de1ce94"
}
initializeApp(config)

const messaging = getMessaging();
const db = getDatabase();

const Notification = () => {
    getToken(messaging).then((currentToken) => {
        if (currentToken) {
            let le = currentToken.split('')
            let fi = []
            for (var i = 0; i < 10; i++) {
                fi[i] = le[i]
            }
            console.log('token ==> ', currentToken)
            set(ref(db, 'tokens/' + fi.join('')), currentToken).then(()=>{
                console.log('done')
            }).catch((err)=>{
                console.log('err',err)
            })

        } else {
            console.log('No registration token available. Request permission to generate one.');
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}

export default Notification;