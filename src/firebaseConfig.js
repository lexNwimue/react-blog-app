import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKRT7vD1hqTcDYdlZZ3c7QaZ4ZuZVk8Mo",
  authDomain: "react-app-4a1f9.firebaseapp.com",
  projectId: "react-app-4a1f9",
  storageBucket: "react-app-4a1f9.appspot.com",
  messagingSenderId: "340912327411",
  appId: "1:340912327411:web:f3278e378f1629043ac586",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const collectionRef = collection(db, "blogs");

// Get documents from collection and add them to the documents array
let documents = [];
getDocs(collectionRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    documents.push({ ...doc.data(), id: doc.id });
  });

  // console.log(documents);
});

export { documents, addDoc, collectionRef };
