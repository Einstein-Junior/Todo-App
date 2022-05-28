import { useRef, useState } from "react";
import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate} from 'react-router-dom';

const LogIn = (email, password) => {
    // We'll return this, so we can get the status of this. To know whether it succeeded or not
        //createUserWithEmailAndPassword(auth, email, password)
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn, currentUser, googleSignIn, googleUser} = useAuth()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sign up is an asynchronous event
    try {
      setError()
      setLoading(true)
      await logIn(emailRef.current.value, passwordRef.current.value)
      // await googleSignIn() 
      navigate("/todo-app")
    }
    catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <>
      <div className="log-in min-h-screen relative text-gray-900">
        <div className='px-5 text-xl sm:px-20 py-2 sm:py-8 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md' style={{backgroundColor:'#e2e3e4'}}>

          <h2 className="text-center pb-6 text-xl font-semibold">Log In</h2>
          {/* {currentUser.email} */}
          {error && <strong className="bg-red-500 p-2 w-full flex justify-center">{error}. This may be due to bad internet connection or provision of incorrect details</strong>}
          <form onSubmit={handleSubmit} className='mt-3'>
            <div className="email pb-6">
              <label htmlFor="email" className="mr-2">Email</label> <br />
              <input  className="border-black border-b-2 w-72  outline-none text-center bg-transparent" type="email" id="email" required ref={emailRef}/>
            </div>
            <div className="password pb-6" >
              <label className="mr-2" htmlFor="password">Password</label> <br />
              <input className="border-black border-b-2 w-72 bold outline-none text-center bg-transparent" type="password" id="password" required ref={passwordRef}/>
            </div>
            <div className="w-full flex justify-center pb-3" ><button disabled={loading} className=" p-2 w-72 rounded-md   bg-purple-700 text-white text-xl transition-all ease border-2 decoration-none hover:cursor-pointer" type="submit">Log In</button></div>
            {/* <div className="w-full flex justify-center"><button disabled={loading} onClick={googleSignIn} className=" px-4 py-2 rounded-md text-black text-lg transition-all ease border-2 decoration-none hover:cursor-pointer" type="submit"> Sign In With Google</button></div> */}
            <div className="w-100 text-center mt-3">
                <Link to="/forgot-password" className="text-blue-500 text-xl">Forgot Password?</Link>
            </div>
          </form>
        <div className="w-100 text-center">
          Need an account? <Link to="/signup" className="text-blue-600">Sign Up</Link>
        </div>
        </div>
      </div>
    </>
    );

}    
export default LogIn;