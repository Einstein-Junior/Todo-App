import { addDoc, collection, serverTimestamp, deleteDoc, updateDoc, onSnapshot, doc, query, orderBy,where, getDoc } from 'firebase/firestore';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import "../index.css";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import ToDoList from '../components/ToDoList';
import TextBar from '../components/TextBar';
import NavBar from '../components/NavBar';


const colRef = collection(db, "todos");
const q = query(colRef, orderBy("createdAt", "desc"))


const ToDoApp = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('')
  const [update, setUpdate] = useState(null);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
 
  
  const textUpdateRef = useRef();
  
  const { currentUser, logOut} = useAuth();
  // useEffect hook for quick state updates
  useEffect(() => {
    const unsub = onSnapshot(q, (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, todo: doc.data().todo, user: doc.data().user, completed: doc.data().completed})
      })
      setTodos([...list])
      console.log(todos)
    });
    return () => unsub();
  }, [])
  

  // Firebase Methods for manipulating Firestore database
  const addTodo = async(event) => {
    event.preventDefault()
    await addDoc(colRef, {
      todo: input,
      createdAt: serverTimestamp(),
      user: currentUser.uid,
      completed: false
    })
    .catch(err => console.log(err))
    setInput(' ')
  }

  useEffect(() => {
      const counter = () => {
        let previousTodos = [...todos, todos].filter((todo) => todo.completed)
        setCount(previousTodos.length)
        console.log(previousTodos);
      }
    return counter();
  }, [todos])
  
  const handleLogout = async () => {
    setError('')
    try {
        await logOut();
        navigate('/signup')
    }
    catch {
        setError('Failed to log out')
    }
}

     const updateTodo = async (id) => {
        const docRef = doc(db, 'todos', id)

        await updateDoc(docRef, {
          todo: textUpdateRef.current.value,
        })

       setUpdate(null)
       
     };
  
  const toggleComplete = async (id) => {
    const ref = doc(db, 'todos', id)
    await getDoc(ref)
      .then((doc) => {
        if (doc.exists) {
          let docRef = doc.ref
          return updateDoc(docRef, {
            completed: !doc.data().completed
          })
        }
        else {
          console.log(error)
        }
      }
      )
  }  
      
  const deleteTodo = async (id) => {
    const docRef = doc(db, "todos", id)
    await deleteDoc(docRef)
}

  
  return (
    <div className='todoApp overflow-x-hidden'>
       <div className='app overflow-x-hidden min-h-screen' style={{width: '100vw'}}>
          {/* Set the value of your input container to the input state 
          CRUD enabled*/}
                  <NavBar error ={error} count={count} onLogOut={handleLogout} />
                  <TextBar input={input}  setInput ={setInput} onAddTodo={addTodo} />
                  <ToDoList todos={todos} open={open} setOpen={setOpen} updateRef = {textUpdateRef} setUpdate={setUpdate} update={update} onComplete={toggleComplete} onTodoUpdate={updateTodo} onDelete={deleteTodo}/>
        </div>
    </div>
  )
}


export default ToDoApp;