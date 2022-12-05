import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStyle } from './components/styles/global.js';
import { RoutesMain } from './Routes';
import { api } from './services/api';

function App() {
  const [userLogged, setUserLogged] = useState(null)

  const navigate = useNavigate()

   const userLogin = async (formData, setLoading) =>{
    try {

      setLoading(true)
      const response = await api.post("/sessions", formData);

      localStorage.setItem("@TOKEN", (JSON.stringify(response.data.token)))
      setUserLogged(response.data.user)
      navigate("/dashboard")
      console.log(response.data)
    } catch (error) {

      console.log(error)

    } finally {
      setLoading(false)
    }
  }

  const userLogout = () => {
    localStorage.removeItem("@TOKEN")
    setUserLogged(null)
    navigate("/")
  }

  return (
    <>
      <GlobalStyle/>
      <RoutesMain userLogin={userLogin} userLogged={userLogged} userLogout={userLogout} />

    </>
  )
}

export default App
