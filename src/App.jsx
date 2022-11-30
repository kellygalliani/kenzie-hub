import { useEffect } from 'react';
import { GlobalStyle } from './components/styles/global.js';
import { RoutesMain } from './Routes';
import { api } from './services/api';

function App() {
  useEffect(()=>{
    async function getUsers(){
      try {
        const response = await api.get('/users ')
        
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
    
  }, [])
  return (
    <>
      <GlobalStyle/>
      <RoutesMain/>

    </>
  )
}

export default App
