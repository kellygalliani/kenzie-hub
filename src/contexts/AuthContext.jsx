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
    console.log("auth")
    const navigate = useNavigate()

    const userLogin = async (formData, setLoading) =>{
        try {
          setLoading(true)
          const response = await api.post("/sessions", formData);
          const {token, user} = response.data
          localStorage.setItem("@TOKEN", (response.data.token))
          localStorage.setItem("@USERID", (JSON.stringify(response.data.user.id)))
    
          setUserLogged(user)
          toast.success("Login efetuado com sucesso", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          setTimeout(()=>{
            navigate("/dashboard")
          }, 3000)
          
          
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
        console.log("effect")
        const loadUser = async () =>{ /* FUNÇÃO PARA VER SE O USUÁRIO ESTÁ REALMENTE AUTENTICADO */
           const token =  localStorage.getItem("@TOKEN")
          
           if(!token){
            setloadingForApi(false)
            console.log("oi")
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
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}