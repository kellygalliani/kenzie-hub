import React, { useEffect } from "react"
import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export const ProtectedRoutes = () => {
    const navigate = useNavigate()
    const {userLogged, loadingForApi} = useContext(AuthContext)
    
    if(loadingForApi){ /* (esse if serve para ver se ainda está logando) */
      return null /* (aqui poderia retornar um componente carregando) */
    }
    
  return (
    <>
        {userLogged ? <Outlet /> : navigate("/")}
    </>
  )
}
