import React from 'react'
import { useRef, useState } from "react";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Link} from 'react-router-dom';



const ForgotPassword = () => {
    const emailRef = useRef();
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Sign up is an asynchronous event
        try {
        setMessage('')
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage('Check your inbox for further instructions')
      }
      catch {
        setError('Failed to reset password')
      }
  
      setLoading(false)
    }
  
    return (
      <>
        <div className="min-h-screen relative bg-neutral-200"  id="info-card">
          <div  className='border-2 px-12 border-black md:px-20 py-20 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md'>
            <h2 className="text-center py-6 text-xl font-semibold">Password Reset</h2>
            {error && <strong className="bg-red-500 p-2 mb-4 w-full flex justify-center">{error}</strong>}
            {message && <strong className="bg-green-500 p-4">{message}</strong>}
            <form onSubmit={handleSubmit} className='text-center'>
              <div className="email pb-6">
                <label htmlFor="email">Email: </label>
                <input type="email" className="border-b-2 border-black bg-transparent px-10 outline-none text-center" id="email" required ref={emailRef}/>
              </div>
              <div className='flex items-center justify-center text-lg pb-3'><button disabled={loading} className="p-2 rounded-md  hover:bg-purple-500 bg-purple-700 text-white transition-all ease border-2 decoration-none hover:cursor-pointer" type="submit">Reset Password</button></div>
              <div className="w-100 text-center pt-6">
                  <Link to="/login" className='text-blue-800'>Login Now</Link>
              </div>
            </form>
          <div className="w-100 text-center pt-6">
            Need an account?<br/><Link to="/signup" className='text-blue-500'>Sign Up Instead</Link>
          </div>

          </div>
        </div>
      </>
      );
}    
export default ForgotPassword;