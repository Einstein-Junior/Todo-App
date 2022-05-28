import React from 'react';
import "../index.css"
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();


    const getStarted = () => {
      navigate('/login')
    }
  return (
      <div className='board flex flex-col relative justify-between min-w-screen min-h-screen border-black border-2 overflow-x-hidden' onLoad={blur} style={{ width: '100%', height: '100%'}}>
         <div className='container text-center h-full'>
              <div className=" flex flex-col justify-evenly  md:flex md:flex-row md:justify-evenly pt-6">
                  <strong className='text-4xl p-2 text-white animate-bounce transition duration-700'>Welcome User</strong>
                  <div className='pb-14'></div>
                  <div><Link to="/signup" className="w-full p-3 text-center font-medium duration-200 bg-yellow-400 rounded-md hover:bg-yellow-200  hover:cursor-pointer">
                      Get Started
                  </Link>
                 </div> 
              </div>  
        </div>
      <div className="p-4 flex">
              <div>
                <small className="text-black text-lg font-semibold">Already Signed up?</small>&nbsp;
                <button onClick={getStarted}><small className='text-blue-400 hover:cursor-pointer'>Login</small></button>
              </div>
        </div>
      </div>
  )
}

export default Dashboard;