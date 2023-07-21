import React, {Component, useState} from 'react';
import './style.css';

const App=()=>{

  const [users,setUser]=useState([]);

  const loadUsers=async()=>{
    console.log('before');
    const response =await fetch('https://api.github.com/users');
    const jsonresponse=await response.json(); 
    setUser(jsonresponse);
  }

  return (
    <div className='App'>
      <div class="hh">
      <center><h1 class="h1">TASK 2: create-react-app</h1>
      <button onClick={loadUsers}>Load Data</button>
      <h1 class="h1">Users Data</h1></center>
      </div>
      <div class="grid-container">{users.map(({html_url,id,login,avatar_url,url,type})=>(
      <div class="grid-item" key={id}>
        <div clas="im">
          <a href={url}><img class="pfp" src={avatar_url}></img></a>
        </div>
      <p>Username: <a href={url}>{login}</a></p>
      <p>Type: {type}</p>
      <p>Github Link: <a href={html_url}>{html_url}</a></p>
      </div>
      ))}
      </div>
        
        
      
    </div>
    )
}
export default App;