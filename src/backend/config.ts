import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.apps.length){
    //se a aplicacao estiver desligada ele entra da condicional e inicializa o firebase
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}
export default firebase