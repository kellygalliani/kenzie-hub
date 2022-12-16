import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../services/api";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) =>{
  const [userLogged, setUserLogged] = useState(null)
  const [loadingForApi, setloadingForApi] = useState(true)
  
  const navigate = useNavigate()

  const loadUser = async () =>{ 
    const token =  localStorage.getItem("@TOKEN")
  
    if(!token){
      setloadingForApi(false)
    return 
    }
    try {
      const { data } = await api.get("/profile",{ 
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setUserLogged(data) 
    }
    catch (error) {
        console.error(error)
    } finally{
        setloadingForApi(false)
    }
  }

  const apiRegister = async (formData) =>{
    const data = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
    }
   
        try {
          setloadingForApi(true)
            const response = await  api.post("/users", data)

            toast.success('Cadastro efetuado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            navigate("/")
            
        } catch (error) {
         
            toast.error("Algo deu errado!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            console.log(error)
        } finally{
          setloadingForApi(false)
        } 
  }  

  const userLogin = async (formData, setLoading) =>{
      try {
        setLoading(true)
        const response = await api.post("/sessions", formData);
        const {token, user} = response.data
        localStorage.setItem("@TOKEN", (token))
        localStorage.setItem("@USERID", (JSON.stringify(response.data.user.id)))
  
        setUserLogged(user)
        toast.success("Login efetuado com sucesso", {
          position: "top-right",
          autoClose: 300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
        navigate("/dashboard")
      } catch (error) {
  
        toast.error("Algo deu errado!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        console.log(error)
  
      } finally {
        setLoading(false)
      }
  }

  useEffect(()=>{
    loadUser()
  }, [])  
    
  const userLogout = () => {
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    setUserLogged(null)
    navigate("/")
  }
  
  return(
    <AuthContext.Provider value={{
            userLogin,
            userLogout,
            setUserLogged,
            userLogged,
            loadingForApi,
            apiRegister,
            loadUser
        }
    }>
        {children}
    </AuthContext.Provider>
  )
}