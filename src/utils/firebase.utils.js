// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiz4vXfI0MmKTbvUSfYTQykBNFdIKbAVo",
    authDomain: "gaming-store-cb349.firebaseapp.com",
    projectId: "gaming-store-cb349",
    storageBucket: "gaming-store-cb349.appspot.com",
    messagingSenderId: "425384546509",
    appId: "1:425384546509:web:16a701cee8a49456edd984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};
export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
            console.log('Documento de usuario creado correctamente');
        } catch (error) {
            console.error('Error al establecer el documento de usuario:', error);
        }

    }

    return userDocRef;
}

export const createAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}