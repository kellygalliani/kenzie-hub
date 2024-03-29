import React from "react"
import { useContext } from "react"
import { Outlet, useNavigate,  } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export const ProtectedRoutes = () => {
    const navigate = useNavigate()
    const { userLogged, loadingForApi } = useContext(AuthContext)
    
    if(loadingForApi){ 
      return null 
    }
    
  return (
    <>
        {userLogged ? <Outlet /> : navigate("/")}
    </>
  )
}
