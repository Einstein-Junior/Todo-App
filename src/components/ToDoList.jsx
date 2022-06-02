import React from 'react';
import ToDoItem from './ToDoItem';
import "../index.css"; 



const ToDoList = ({todos,open, setOpen, setUpdate, update, updateRef, onComplete, onTodoUpdate, onDelete}) => {
  return (
      <>
        <ul className="overflow-x-hidden w-full">
            <ToDoItem todos={todos} open={open} setOpen={setOpen} setUpdate={setUpdate} update={update} updateRef={updateRef} onComplete={onComplete} onTodoUpdate={onTodoUpdate} onDelete={onDelete} />
        </ul>
    </>
  )
}

export default ToDoList