import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from '../components/ProtectedRoutes';
import { TechsProvider } from '../contexts/TechsContext';
import { Dashboard } from '../pages/Dashboard';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route  path="/" element={ <LoginPage /> } />
      <Route  path="register" element={ <RegisterPage /> } />
      <Route path="/dashboard" element={ <ProtectedRoutes />}>
        <Route  index  element={ 
          <TechsProvider>
            <Dashboard />
          </TechsProvider>  } />
      </Route> 
    </Routes>
  )
}
