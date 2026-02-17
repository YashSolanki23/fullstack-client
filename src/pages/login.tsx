import React, { useState } from "react"
import { login } from "../auth/auth.service"


export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function handleSubmit(e:React.SyntheticEvent){
    e.preventDefault();

    const result=await login(email,password);
    console.log(result);
  }


  return <>
  <form onSubmit={handleSubmit}>
    
    <input
    placeholder="email"
    value={email}
    onChange={e=>setEmail(e.target.value)}
    />
   
   <input
   type="password"
   placeholder="password"
   value={password}
   onChange={e=>setPassword(e.target.value)}
   />
   <button type="submit">Login</button>
  </form>
  </>
}