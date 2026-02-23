import type React from "react";


export default function Layout({children}:{children:React.ReactNode}){

  return <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-semibold">Realtime Dashboard</h1>
      <button className="text-sm text-red-500">Logout</button>
    </header>
     <main className="p-6">{children}</main>
  </div>
}