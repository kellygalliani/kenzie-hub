import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedRoutes = ({userLogged}) => {
    const navigate = useNavigate()

    useEffect(()=>{
        if(!userLogged){
            navigate("/")
        }   
    }, [])

  return (
    <>
        {userLogged && <Outlet />}
    </>
  )
}
