import React , {useState,useEffect} from 'react';
import './App.css';
import firebase from "./firebase";
function Account({acc}) {
  const [account,setaccount] = useState();
  useEffect(() =>{
    const accountreq = firebase.database().ref("accounts").child(acc.account);
    accountreq.on("value",(snapshot) =>{
       const accountsval = snapshot.val(); 
       const account = [];
       for(let id in accountsval)
       {
         account.push(accountsval[id]);
       }
       setaccount(account);
    })
   },[]);
  return (
    <div>
    {         
     account ? account.map((val,index) => {
        return (
        <>
        {   
            <p><b>App Title:</b> {val[Object.keys(val)[0]].title}</p>
        } 
        </>
        )
        }) : ''
    }
    </div>
  );
}

  export default Account;