import React, { useEffect } from 'react'
import Logo from '../../assets/Logo.svg'
import { FormLogin } from '../../components/FormLogin'
import { api } from '../../services/api'
import { StyledLoginPage } from './styles'

export const LoginPage = ({userLogin}) => {
  
  return (
    <StyledLoginPage>
        <img src={Logo} alt='logoKenzieHub'/>
        <FormLogin userLogin={userLogin} />
    </StyledLoginPage>
  )
}
