import React , {useState,useEffect} from 'react';
import './App.css';
import Account from './Account';
import firebase from "./firebase";
function App() {

  const [user,setuser] = useState();
  var Num = 0;
  useEffect(() =>{
    const userreq = firebase.database().ref("users");
    userreq.on("value",(snapshot) =>{
       const usersval = snapshot.val(); 
       const user = [];
       for(let id in usersval)
       {
         user.push({id, ...usersval[id]});
       }
       setuser(user);
    })
   },[]);
  return (
    <div className = "show">
    {
      user ? user.map((val, index) => {
        Num +=1
        return (
        <>
        <h1>{Num}. Username: {val.name}</h1>
        <p><b>Account ID:</b> {val.account}</p>
        <Account key = {index} acc = {val}/>
        </>
        )
        }) : ''
    }
    </div>
  );
}

export default App;
