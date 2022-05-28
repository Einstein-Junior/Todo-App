import { useRef, useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = (email, password) => {
    // We'll return this, so we can get the status of this. To know whether it succeeded or not
        //createUserWithEmailAndPassword(auth, email, password)
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, currentUser } = useAuth()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate= useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    // Sign up is an asynchronous event
    try {
      setError()
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)
      navigate("/login")
    }
    catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }
  return (
    <div className="info-card min-h-screen  text-gray-900">
      <div  className='px-5 py-8 sm:py-2  sm:px-20 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md' style={{backgroundColor:'#e2e3e4'}}>
       <h1 className="text-2xl font-semibold sm:h-80 absolute left-2 sm:left-6 text-slate-400">Welcome, </h1>
        <h1 className="pb-8"></h1>
        <h2 className="text-center text-xl font-semibold">Sign Up</h2>
        {/* {currentUser.email} */}
        {error ? <strong className="bg-red-500 p-2 w-full flex justify-center m-2">{error}</strong> : ''}
        <form onSubmit={handleSubmit} className='mt-3 text-lg'>
          <div className="email pb-6">
            <label htmlFor="email" className="mr-2">Email: </label> <br/>
            <input type="email" className="border-black border-b-2 w-72 outline-none text-center bg-transparent" id="email" required ref={emailRef}/>
          </div>
          <div className="password pb-6" >
            <label htmlFor="password">Password: </label>  <br/>
            <input type="password" className="border-black border-b-2 w-72 outline-none text-center bg-transparent" id="password" required ref={passwordRef}/>
          </div>
          <div className="password-confirm pb-6" >
            <label htmlFor="password-confirm">Confirm Password: </label> <br/>
            <input type="password" id="password-confirm" className="border-black border-b-2 w-72 outline-none text-center bg-transparent" required ref={passwordConfirmRef}/>
          </div>
          <div className="w-full flex justify-center" ><button disabled={loading} className=" w-72 p-4 rounded-md mb-2  bg-purple-700 text-white text-xl transition-all ease border-2 decoration-none hover:cursor-pointer"  type="submit">Sign Up</button></div>
        </form>
      <div className="w-100 text-center">
        Already have an account? <Link to="/login" className="text-blue-600">Log In</Link>
      </div>
      </div>
    </div>
    );

}    
export default SignUp;