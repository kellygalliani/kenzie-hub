import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStyle } from './components/styles/global.js';
import { RoutesMain } from './Routes';
import { api } from './services/api';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [userLogged, setUserLogged] = useState(null)

  const navigate = useNavigate()

   const userLogin = async (formData, setLoading) =>{
    try {

      setLoading(true)
      const response = await api.post("/sessions", formData);

      localStorage.setItem("@TOKEN", (JSON.stringify(response.data.token)))
      localStorage.setItem("@USERID", (JSON.stringify(response.data.user.id)))

      setUserLogged(response.data.user)
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
        autoClose: 5000,
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

  const userLogout = () => {
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    setUserLogged(null)
    navigate("/")
  }

  return (
    <>
      <GlobalStyle/>
      <RoutesMain userLogin={userLogin} userLogged={userLogged} userLogout={userLogout} />
      <ToastContainer />
    </>
  )
}

export default App
