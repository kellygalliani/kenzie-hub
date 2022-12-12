import React, { Children, useContext } from 'react'
import { TechsContext } from '../../../contexts/TechsContext'
import { StyledInputBox } from './style'

export const InputBox = ({ label, type, id, placeholder, register, disabled, value, children}) => {
  const { selectedTechnology, setSelectedTechnology} = useContext(TechsContext)

  if(type === "select"){
    return (
      <StyledInputBox>
          <label htmlFor={id}>{label}</label>
          <select {...register}>
            {children}
          </select>
      </StyledInputBox>
    )
    
  }else{ 
    return (
      <StyledInputBox>
          <label htmlFor={id}>{label}</label>
          <input type={type} placeholder={placeholder} disabled={disabled} {...register} />
      </StyledInputBox>
    )
  }
}

