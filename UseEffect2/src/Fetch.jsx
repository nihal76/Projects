import React from "react";
import { useState } from "react";
import { useEffect } from "react";
 const Fetch = ()=> {

  let dataFound ;
const [users,setUsers] = useState([]);
const FetchUser = ()=> {

  fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => { 
        setUsers(data);
        dataFound = true;
    })
      .catch((err) => console.log('Data not found:', err));
}

const FetchSpecific = (user)=> {

  fetch(`https://jsonplaceholder.typicode.com/users?name=${user}`)
      .then((response) => response.json())
      .then((data) => { 
        setUsers(data);
          dataFound = true;
    })
   .catch(err => console.log(err))
}


 return (
 <>
      <h2>User List</h2>
      <button onClick = {FetchUser}>Fetch Users</button>
      <br></br>
      <input type= "text" name = 'fetch'  />
          <button onClick = { () => FetchSpecific(document.getElementsByName('fetch')[0].value) }>Fetch Specific</button>
      <div>
        {
           users.map((user) => {
          return (
            <div key={user.id}>
            <h5>User : {user.name}</h5>
            <p>Email : {user.email}</p>
          </div> 
          )
        })
        }
      </div>
    </>
 )
 
}

export default Fetch;