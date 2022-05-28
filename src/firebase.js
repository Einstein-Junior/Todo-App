import { initializeApp } from "firebase/app";
import {
  collection,
  onSnapshot,
  getFirestore,
  addDoc,
  deleteDoc,
  doc, query, where,
  orderBy,
  serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyApk-mmvSnjP08T7sOsCJFDbGekUROQ44c",
  authDomain: "todo-app-final-be894.firebaseapp.com",
  projectId: "todo-app-final-be894",
  storageBucket: "todo-app-final-be894.appspot.com",
  messagingSenderId: "647280515728",
  appId: "1:647280515728:web:e05cba6e3efa9ca0725615"
};

// Connects to the firebase backend
initializeApp(firebaseConfig);
// export default app;
// initialize services
export const  db = getFirestore();
export const auth = getAuth();

// // Get a reference to a collection in the database
// const colRef = collection(db, "todos"); 
// // We want our reference to query a specific property:
// const q = query(colRef, orderBy('createdAt', 'desc'))

// // To get Collection data:
// // getDocs(colRef)
// // .then((snapshot) => {
// //   let todos = [];
// //   snapshot.docs.forEach((doc) => {
// //     todos.push[{...doc.data(), id: doc.id}]
// //   })
// //   console.log(todos)
// // })
// // .catch(err => console.log(err.message))

// // Subscription
// // To get Collection data
// // We'll make it realtime:
// const unsubCol = onSnapshot(query, (snapshot) => {
//   let todos = [];
//   snapshot.docs.forEach((doc) => {
//     todos.push[{...doc.data(), id: doc.id}]
//   })
//   console.log(todos)
// })


// //Add to a collection
// const addBookForm = document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   addDoc(colRef, {
//     todo: (myTodo),
//     createdAt: serverTimestamp()
//   })
//     .then(() => {
//       addBookForm.reset();
//   })

// })

// //Delete from a collection
// const deleteBookForm = document.querySelector('.delete');
// deleteBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   // doc("database", "collection", "id")
//   const docRef = doc(db, 'todos', deleteBookForm.id.value)

//   deleteDoc(docRef)
//     .then(() => {
//       deleteBookForm.reset()
//     })
// })

// // Updating documents
// const updateForm = document.querySelector("./update")
// updateForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const docRef = doc(db, "todos", updateForm.id.value )

//   updateDoc(docRef, {
//     todo: (updated),
//   })
//     .then(() => {
//     updateForm.reset()
//   })

// })





// // To get a single document
// const docRef = doc(db, 'todos', 'id')

// // getDoc(docRef)
// //   .then(doc => {
// //     console.log(doc.data(), doc.id)
// //   })

// //Subscription
// // To reflect changes realtime on single document you're querying
// const unsubDoc = onSnapshot(docRef, (doc) => {
//   // Everytime this one document changes:
//   console.log(doc.data(), doc.id)
// })

// // Signing users up
// const signupForm = document.querySelector("./signup")
// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = signupForm.email.value;
//   const password = signupForm.password.value
//   //createUserWithEmailAndPassword(auth, email, password)
//   createUserWithEmailAndPassword(auth, email, password) 
//     .then((credential) => {
//         // Every user signing up has a credential object
//       console.log('User created:', credential.user)
//       signupForm.reset()
//     })
//     .catch((err) => console.log(err))
// })

// // Login users and Log-out
// const logOutButton = document.querySelector('./logout')
// logOutButton.addEventListener('click', () => {
//   signOut(auth)
//     .then(() => {
//       console.log("User signed out")
//     })
//     .catch(err => console.log(err.message))
// })


// const loginForm = document.querySelector('./login')
// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault()
  
//   const email = loginForm.email.value;
//   const password = loginForm.password.value
//   // signInWithEmailAndPassword(auth, email, password)
//   signInWithEmailAndPassword(auth, email, password)
//     .then((credential) => {
//         console.log("User Logged in:", credential.user)
//     })
//     .catch(err => console.log(err.message))
// })


// //Subscription
// // Add an event listener to the login and logout so you get instant changes
// const unsubAuth = onAuthStateChanged(auth, (user) => {
//    console.log('User status changed:', user)
// })


// // Unsubscribing from changes (auth & db)
// const unsubButton = document.querySelector('./unsub')
// unsubButton.addEventListener('click', () => {
//   unsubAuth();
//   unsubCol();
//   unsubDoc();
// })









