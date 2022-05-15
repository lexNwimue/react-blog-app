// import { addDoc, collectionRef } from "./firebaseConfig";
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
});

const Form = () => {
  const handleSubmit = () => {
    const form = document.getElementById("blog-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addDoc(collectionRef, {
        title: form.title.value,
        author: form.author.value,
        body: form.body.value,
      }).then(() => {
        form.reset();
        console.log("Form Submitted Successfully");
      });
    });
  };

  const handleClear = (e) => {
    const form = document.getElementById("blog-form");
    e.preventDefault();
    form.reset();
  };
  return (
    <>
      <div className="container">
        <h2 className="form-header">Create a New Blog</h2>

        <form action="" id="blog-form">
          <label htmlFor="title">Title: </label>
          <br />
          <input type="text" id="title" name="title" required />
          <br />
          <label htmlFor="author">Author: </label>
          <br />
          <input type="text" id="author" name="author" required />
          <br />
          <label htmlFor="body">Body: </label>
          <textarea name="body" id="body" required></textarea>
          <div className="btn-group">
            <button className="create-btn" onClick={(e) => handleSubmit(e)}>
              Create
            </button>
            <button className="clear-btn" onClick={(e) => handleClear(e)}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
