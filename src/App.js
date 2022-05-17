import React, { useDebugValue, useEffect } from "react";

import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import {
 
  Route,
  BrowserRouter as Router,
  Routes
 
} from "react-router-dom";
import{useDispatch, useSelector} from 'react-redux'

import EmailList from "./component/EmailList";
import Mail from "./component/Mail";
import SendMail from "./component/SendMail";
import { selectMail } from "./features/MailSlice";
import { login, selectUser } from "./features/Login-Slice";
import { Login } from "./component/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./component/Firebase";


function App() {
  const sendMessage=useSelector(selectMail)

 const user=useSelector(selectUser)
 const dispatch=useDispatch()
 useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
     if(user){
       dispatch(login({
        displayName:user.displayName,
        email:user.email,
        photoUrl:user.photoURL
    }))
     }else{

     }
   })

 },[])
  return (
    <Router>
      {!user?<Login/>: 
      <div className="App">
      <Header />
       
        <div className="app_body">
       
          <Sidebar />
         
          <Routes>
          
            <Route path="/" element={  <EmailList />}>
            </Route>
            <Route path="/mail" element={<Mail />}/>
            
            
           
          </Routes>
        </div>
        {sendMessage&&<SendMail />}
      </div>}
     
    </Router>
  );
}

export default App;
