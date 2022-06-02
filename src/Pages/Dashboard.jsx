import React from 'react';
import "../index.css"
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    const navigate = useNavigate();


    const logOn = () => {
      navigate('/login')
    }
  return (
      <div className='board  flex flex-col relative justify-between min-w-screen min-h-screen border-black border-2 overflow-x-hidden' onLoad={blur} style={{ width: '100%', height: '100%'}}>
         <div className='container text-center h-full w-full'>
              <div className="flex flex-col items-center flex-1 gap-14 lg:gap-4 lg:flex lg:justify-around lg:flex-row pt-6 lg:w-[1536px]">
                  <strong className='text-4xl my-4 text-white animate-bounce transition duration-700'>Welcome User</strong>
                  <div className='pb-14'></div>
                  <div className='lg:hidden items-center justify-center'><p className='text-2xl text-blue-600'>Organize Your Tasks On The Go...</p></div>  
                  <motion.div whileTap={{ scale: 0.9 }}><Link to="/signup" className="w-full lg:mr-10 p-3 text-center font-medium duration-200 bg-yellow-400 rounded-md hover:bg-yellow-200  hover:cursor-pointer">
                      Get Started
                  </Link>
                 </motion.div> 
              </div>
        <div className='hidden lg:flex items-center justify-center'><p className='text-2xl text-slate-300'>Organize Your Tasks On The Go...</p></div>  
        </div>
        <div className="p-4 flex">
              <div>
                <small className="text-black text-lg font-semibold">Already Signed up?</small>&nbsp;
          <motion.button whileTap={{ scale: 0.9 }} onClick={logOn}><small className='text-blue-500 hover:cursor-pointer text-2xl'>Login</small></motion.button>
              </div>
        </div>
      </div>
  )
}

export default Dashboard;