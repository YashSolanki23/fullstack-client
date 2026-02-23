import React, { useState } from "react"
import { login } from "../auth/auth.service"


export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  async function handleSubmit(e:React.SyntheticEvent){
    e.preventDefault();
   
    if(!email || !password){
      setError("Please Fill all Fields");
      return;
    }
    setError("");
    setLoading(true);

    try {
      await login(email,password);
    } catch {
      setError("Invalid Credentials");
    }

    setLoading(false);
  }


  return <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form onSubmit={handleSubmit} className="bg-white p-6  rounded-lg shadow-md w-80">
  <h2 className="text-xl font-semibold mb-4">Login</h2>
  
  {error && (<div className="bg-red-100 text-red-600 p-2 mb-3 rounded">{error}</div>)}

    <input
    className="w-full border p-2 mb-3 rounded"
    placeholder="email"
    value={email}
    onChange={e=>setEmail(e.target.value)}
    />
   
   <input
   className="w-full border p-2 mb-4 rounded"
   type="password"
   placeholder="password"
   value={password}
   onChange={e=>setPassword(e.target.value)}
   />
   <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50">
  {loading ? "Logging in..." : "Login"}
    </button>
  </form>
  </div>
}