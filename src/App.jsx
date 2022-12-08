import { GlobalStyle } from './components/styles/global.js';
import { RoutesMain } from './Routes';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
     
  return (
    <>
      <GlobalStyle/>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      <ToastContainer />
    </>
  )
}

export default App
