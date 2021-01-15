import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Imessage from './Imessage';
import LogIn from './LogIn';

function App() {
  const user =useSelector(selectUser);
  const dispatch = useDispatch();

  
  useEffect(() =>{
  auth.onAuthStateChanged(authUser =>{
    if(authUser){
     dispatch(login({
       uid :authUser.uid,
       photo :authUser.photoURL,
       email:authUser.email,
       displayName :authUser.displayName,
     })
     );   
    }else{
       dispatch(logout());
    }
  })
  },[]);
  
  return (
    <div className="App">
      {user ? (
        <Imessage />
      ):(
        <LogIn />
      )}
   
    </div>
  );
}

export default App;
