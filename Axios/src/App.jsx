import React from "react";
import axios from 'axios';
import './index.css'
import { useEffect, useState } from "react";

export const App = () => {
  const[data,setData] = useState([]);
   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => 
          setData(response.data)
      );
      setLoading(false);
}, [])


return (
  data.map((user,index) => 
     <>
       { (index < 15) ?
      <section key={user.id}>
         <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.body}</p>
      </section> : ''
    }
     </>
    )
)

}

  
