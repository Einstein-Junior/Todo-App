import React from 'react';
import "../index.css"; 

const TextBar = ({input, setInput, onAddTodo}) => {
  return (
      <>
        <form className="text-center p-6 text-xl">
                <label htmlFor="todo-input" className='mr-2'>✅Write a Todo</label>
                <input maxLength="50" className="outline-none border-b-2 border-black text-center" placeholder="Write a Todo" value={input} type="text" onChange={event => setInput(event.target.value)} />
                <button disabled={!input } type="submit" onClick={onAddTodo} className={(input) ? "p-2 m-2 rounded-md text-center bg-purple-700 text-white text-lg transition-all ease border-2 decoration-none hover:cursor-pointer hover:bg-purple-500" : "p-2 m-2 rounded-md bg-gray-100 text-center text-gray-500 text-lg border-2 hover:cursor-pointer"}>Add Todo</button>
        </form>  
    </>
  )
}

export default TextBar;