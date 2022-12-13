import React, { Children } from 'react'
import { StyledInputBox } from './style'

export const InputBox = ({ label, type, id, placeholder, register, disabled, children}) => {
  

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

