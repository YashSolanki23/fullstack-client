import { Navigate } from "react-router-dom";
import { useAuth } from "./auth.context";
import type { JSX } from "react";

export default function ProtectedRoute({children}:{children:JSX.Element}){
  const {user} = useAuth();

  if(!user){
    return <Navigate to="/login" replace/>
  }

  return children;
}