
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { InputBox } from '../Form/Input'
import { StyledButton } from '../styles/buttons'
import { RegisterSchema } from './RegisterSchema'
import { StyledForm } from './styles'

export const FormRegister = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { register, handleSubmit ,  formState: { errors }/*, reset */ } = useForm({
       mode: "onChange",
       resolver: yupResolver(RegisterSchema) 
    }  )
 
    
   const apiRegister = async (formData) =>{
    const data = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
    }
    console.log(data)
        try {
            setLoading(true)
            const response = await  api.post("/users", data)
            navigate("/")
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        } 
    }  
    
  return (
    <StyledForm onSubmit={handleSubmit(apiRegister)} >
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>
        <InputBox
            label={"Nome"}
            type={"text"}
            id={"name"}
            placeholder={"Digite aqui seu nome"}
            register={register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>} 
        <InputBox
            label={"Email"}
            type={"email"}
            id={"email"}
            placeholder={"Digite aqui seu email"}
            register={register("email")}
        />
        
        {errors.email && <span>{errors.email.message}</span>} 
        <InputBox
            label={"Senha"}
            type={"password"}
            id={"password"}
            placeholder={"Crie uma senha"}
            register={register("password")}
        />
       {errors.password && <span>{errors.password.message}</span>} 
        <InputBox
            label={"Confirme a sua senha"}
            type={"password"}
            id={"confirmPassword"}
            placeholder={"Confirme a sua senha"}
            register={register("confirmPassword")}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        <InputBox
            label={"Bio"}
            type={"text"}
            id={"bio"}
            placeholder={"Fale sobre você"}
            register={register("bio")}
        />
        {errors.bio && <span>{errors.bio.message}</span>} 
        <InputBox
            label={"Contato"}
            type={"tel"}
            id={"contact"}
            placeholder={"(xx) xxxxx-xxxx"}
            register={register("contact")}
        />
        {errors.contact && <span>{errors.contact.message}</span>}
        <InputBox
            label={"Selecionar módulo"}
            type={"select"}
            id={"select"}
            register={register("course_module")}
        >
            <option value="">Escolha um Módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </InputBox> 
       {errors.course_module && <span>{errors.course_module.message}</span>} 

        <StyledButton type={"submit"} color="primary" buttonType="big" disabled={loading} >
            {loading ? "Carregando..." : "Cadastrar"}
        </StyledButton>
        
    </StyledForm>
  )
}