import { useAuth } from "../auth/auth.context";
import Layout from "../components/layout";

export default function Dashboard(){
  const {user,logout} =useAuth();
  
  return (
  <Layout>
    <div className="bg-whiter rounded shadow p-4">
        <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow p-4 flex justify-between">
        <h2 className="text-lg font-semibold">Welcome {user}</h2>
      <button onClick={logout} className="text-red-500 hover:underline">Logout</button>
      </div>
    </div>
    </div>
  </Layout>
  )
}