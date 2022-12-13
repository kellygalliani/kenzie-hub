import React from 'react'
import Logo from '../../assets/Logo.svg'
import { StyledRegisterPage } from './styles'
import { FormRegister } from '../../components/FormRegister'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {

  return (
    <StyledRegisterPage>
        <div>
          <img src={Logo} alt="logoKenzieHub"/>
          <Link to="/" className="link"><button type='button'>Voltar</button></Link> {/* mudar para navigation */}
        </div>
        <FormRegister/>  
    </StyledRegisterPage>
  )
}
