import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from '../components/ProtectedRoutes';
import { Dashboard } from '../pages/Dashboard';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const RoutesMain = ({userLogin, userLogged, userLogout}) => {
  return (
    <Routes>
      <Route  path="/" element={ <LoginPage userLogin={userLogin} />  } />
      <Route  path="register" element={ <RegisterPage /> } />
      <Route path="dashboard" element={ <ProtectedRoutes userLogged={userLogged} />}>
        <Route  index  element={ <Dashboard userLogin={userLogin} userLogged={userLogged} userLogout={userLogout} /> } />
      </Route> 
      
    </Routes>
  )
}
