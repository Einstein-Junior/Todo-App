import React,{useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';



const ToDoItem = ({ todos, open, setOpen, update, onComplete, onTodoUpdate, updateRef, setUpdate, onDelete }) => {
  
  const checkBoxRef = useRef();



  return (
    <>
       {todos.map((todo) => {
              return (
                <div key={todo.id} className='flex justify-evenly' style={{ width: '100%' }}>
                  {(todo.id === update) ? (
                    <div 
                    open={open} onClose={e => setOpen(false)} className="modal">
                    <input style={{width : '60%'}} className=' py-2 px-10 border-black border-b-2 outline-none bg-transparent' ref={updateRef} type="text" placeholder={todo.todo} />
                    <button disabled={!update} onClick={() => onTodoUpdate(todo.id)} className={(!update) ? "p-2 m-2 rounded-md text-center bg-gray-100 text-gray-500 text-sm transition-all ease border-2 decoration-none hover:cursor-pointer" : "p-2 m-2 rounded-md bg-purple-700 text-center text-white text-sm border-2 hover:cursor-pointer"}>
                      Update Todo
                    </button>
              </div>) :
                    (<div
                     className='flex transition-all ease duration-400 justify-around md:flex-nowrap' key={todo.id} style={{ width: '100%' }}>
                    <li style={{width :'50%'}} className="flex flex-col font-light my-14 text-sm -z-10">
                      <span className={todo.completed ? "text-xl font-semibold line-through" : "text-xl font-semibold"} >{todo.todo}</span>

                    ⏰
                    </li>
                    <div className='flex justify-between w-40 z-10' style={{backgroundColor: '#e6ede8', background: 'transparent'}}>
                       <button><input type="checkbox" id='i' ref={checkBoxRef} onClick= {() => onComplete(todo.id)}/></button>
                      <FontAwesomeIcon icon={faEdit} className='pt-6 w-5 h-5 mt-10 focus:ease-in-out text-black hover:cursor-pointer hover:w-7 hover:h-8' onClick={e => setUpdate(todo.id)}/>
                      <FontAwesomeIcon icon={faTrash} className=' hover:cursor-pointer pt-6 w-5 h-5 mt-10 text-black  hover:w-7 hover:h-7' onClick={() => onDelete(todo.id)}/>

                    </div>
              </div>)
            
              }</div>
                )
              })}
    </>
  )
}

export default ToDoItem;