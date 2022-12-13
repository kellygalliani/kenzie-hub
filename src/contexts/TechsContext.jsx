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
  const {userLogged, loadUser} = useContext(AuthContext)
  const [technologies, setTechnologies] = useState([])
  const [modalIsOpen, setModaIsOpen] = useState(false)
  const [selectedTechnology, setSelectedTechnology] = useState([])

  useEffect(()=>{
    ( async ()=>{
      console.log("modal fechou")
      try {
        const response = await api.get(`/users/${userLogged.id}`)
        setTechnologies(response.data.techs)
      
      } catch (error) {
        console.error(error)
      }
    })()
  }, [selectedTechnology, modalIsOpen]) 

  const createTechnologies = async (data) =>{
    const token =  localStorage.getItem("@TOKEN")
    try {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token
      const response = await api.post("/users/techs", data)

      setModaIsOpen(false)
      toast.success("Tecnologia criada com sucesso", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error(error)
    }
  }

  const editTechnologies = async (data, id) =>{
    
    const token =  localStorage.getItem("@TOKEN")
    try {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token
      const response = await api.put(`/users/techs/${id}`, data)
      
      loadUser()
      setModaIsOpen(false)
      toast.success("Tecnologia alterada com sucesso", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      } )
    } catch (error) {
      console.error(error)
    }
  }

  const deleteTechnologies = async (id) =>{
    const token =  localStorage.getItem("@TOKEN")
    try {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token
      const response = await api.delete(`/users/techs/${id}`)
      
      setModaIsOpen(false)
      toast.success("Tecnologia deletada com sucesso", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
          editTechnologies, 
          deleteTechnologies          
        }}
    >
        {children}
    </TechsContext.Provider>
  )
}

