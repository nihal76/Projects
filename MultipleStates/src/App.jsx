// import React, { useState } from "react";



// export default function App(){
//   let [username,setUser] = useState("");
//     let [email,setEmail] = useState("");
//       let [password,setPassword] = useState("");

//   const handleChange = (e)=> {
//    console.log(e.currentTarget.value);
//    setUser(e.target.value)
// }

//   const handleEmail = (e)=> {
//    console.log(e.currentTarget.value);
//      setEmail(e.target.value)
// }
//   const handlePassword = (e)=> {
//    console.log(e.currentTarget.value);
//      setPassword(e.target.value)
// }
//   return(
//     <form>
//       Username<input type="text" onChange = {handleChange}/>
//        Email<input type="email" onChange = {handleEmail}/>
//        Password<input type="password"  onChange = {handlePassword}/>
//     </form>
//   )
// }

// efficient way to handle updates of multiple form fields using one state variable and event handler


import React, { useState } from "react";

export default function App() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value, 
    }));
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <h3>Form Data Preview:</h3>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </div>
    </form>
  );
}
