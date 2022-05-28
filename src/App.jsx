import React from 'react'
import SignUp from './Pages/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LogIn from './Pages/LogIn';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './Pages/ForgotPassword';
import ToDoApp from './Pages/ToDoApp';

{/* <Route exact path='/' element={<PrivateRoute component={HomePage}/>}/> */}
const App = () => {
  return (
    
    <div id='container w-full h-full'>
      <div >
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path='/todo-app' element={<PrivateRoute/>}>
                <Route exact path='/todo-app' element={<ToDoApp/>} />
              </Route>
              <Route exact path='/' element={<Dashboard/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/login" element={<LogIn/>}/>
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/todo-app" element={<ToDoApp/>}/>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  
  ) 
}

export default App;