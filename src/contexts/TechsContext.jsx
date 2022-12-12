import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../services/api'
import { AuthContext } from './AuthContext'

export const TechsContext = createContext({})

export const TechsProvider = ({children}) => {
  const {userLogin, userLogged, userLogout, loadUser} = useContext(AuthContext)
  const [technologies, setTechnologies] = useState([])
  const [modalIsOpen, setModaIsOpen] = useState(false)
  const [selectedTechnology, setSelectedTechnology] = useState([])

   useEffect(()=>{
    ( async ()=>{
      try {
        const response = await api.get(`/users/${userLogged.id}`)
        setTechnologies(response.data.techs)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [setTechnologies])

  const createTechnologies = async (data) =>{
    const token =  localStorage.getItem("@TOKEN")
    try {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token
      const response = await api.post("/users/techs", data)

      setTechnologies(...data)
      setModaIsOpen(false)
      toast.success("Tenologia criada com sucesso", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const editTecnologies = async (data) =>{
    const token =  localStorage.getItem("@TOKEN")
    try {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token
      const response = await api.post("/users/techs", data)

      setTechnologies(...data)
      setModaIsOpen(false)
      toast.success("Tenologia criada com sucesso", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TechsContext.Provider
        value={{
          setModaIsOpen,
          modalIsOpen,
          createTechnologies,
          technologies, 
          setTechnologies,
          selectedTechnology,
          setSelectedTechnology,          
        }}
    >
        {children}
    </TechsContext.Provider>
  )
}

