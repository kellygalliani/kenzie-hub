import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { InputBox } from '../Form/Input'
import { StyledButton } from '../styles/buttons'
import { RegisterSchema } from './RegisterSchema'
import { StyledForm } from './styles'

export const FormRegister = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
       mode: "onChange",
       resolver: yupResolver(RegisterSchema) 
    })

    const apiRegister = async (formData) =>{
        try {
            setLoading(true)
            await api.post("/users", formData)
            navigate("/")
        } catch (error) {
            if(error.reponse.data.message === "Email already exists"){

            }
        }
    } 
    const submit = async (formData) => {
        delete formData.confirmPassword
        
        console.log(formData)
        reset({
            password: "",
            confirmPassword: ""
        })
    }
  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>
        <InputBox
            label={"Nome"}
            type={"text"}
            id={"text"}
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
        {errors.textBio && <span>{errors.textBio.message}</span>}
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
            register={register("select")}
        >
            <option value="">Escolha um Módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </InputBox> 
        {errors.select && <span>{errors.select.message}</span>} 

        <StyledButton type="submit" color="primary" buttonType="big">Entrar</StyledButton>
    </StyledForm>
  )
}