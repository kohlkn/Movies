import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Album from './Pages/MainPage';
import SignIn from './Pages/SignIn';
import Checkout from './Pages/Checkout';
import SignUp from './Pages/SignUp';
import Book from './Pages/BookTickets';
import RegistrationConfirm from './Pages/RegistrationConfirm';
import AdminView from './Pages/AdminView';
import PersonalProfile from './Pages/Profile';
import Edit from './Pages/EditPage';
import { AuthProvider } from "./Contexts/AuthContext"
import ForgotPassword from './Pages/ForgotPassword'
import Logout from './Pages/Logout'
import UpdatePassword from './Pages/UpdatePassword'
import Test from './Pages/Test'
import About from './Pages/About'
import Contact from './Pages/Contact'

  
function App() {
return (
    <Router>
        <AuthProvider>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Album />} />
        <Route path='/MainPage' element={<Album/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='/RegistrationConfirm' element={<RegistrationConfirm/>} />
        <Route path='/BookTickets' element={<Book/>} />
        <Route path='/AdminView' element={<AdminView/>} />
        <Route path='/Profile' element={<PersonalProfile/>} />
        <Route path='/EditPage' element={<Edit/>} />
        <Route path='/ForgotPassword' element={<ForgotPassword/>} />
        <Route path='/Logout' element={<Logout/>} />
        <Route path='/UpdatePassword' element={<UpdatePassword/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/test' element={<Test/>} />
    </Routes>
    </AuthProvider>
    </Router>
);
}
  
export default App;