import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { InputBox } from '../Form/Input'
import { StyledButton } from '../styles/buttons'
import { StyledForm } from './style'
import { loginSchema } from './loginSchema'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export const FormLogin = () => {
  const { userLogin } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const submit = (data)=>{
    userLogin(data, setLoading)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <InputBox
            label={"Email"}
            type={"email"}
            id={"email"}
            placeholder={"Digite aqui seu email"}
            register={register("email")}
            disabled={loading}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <InputBox
            label={"Senha"}
            type={"password"}
            id={"password"}
            placeholder={"Digite aqui sua senha"}
            register={register("password")}
            disabled={loading}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <StyledButton color="primary" buttonType="big" disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </StyledButton>
        <p>Ainda não possui uma conta?</p>  
        <StyledButton color="greyBig" buttonType="big"><Link to="/register" className='link'>Cadastre-se</Link></StyledButton>
        
    </StyledForm>
  )
}
