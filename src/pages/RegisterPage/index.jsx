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
          <button type='button'><Link to="/">Voltar</Link></button> {/* mudar para navigation */}
        </div>
        <FormRegister/>
    </StyledRegisterPage>
  )
}
