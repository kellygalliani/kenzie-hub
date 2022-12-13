import React from 'react'
import { StyledTitle } from '../../styles/thypograph'
import { StyledEmptyList } from './style'
import { CgInsertAfterR } from "react-icons/cg"


export const EmptyList= ({showModal}) => {
  return (
    <StyledEmptyList onClick={()=>showModal("create")}>
      <div>
        <CgInsertAfterR/>
        <StyledTitle tag="h2" color="Grey-1" type="title3">Não existem tecnologias cadastras</StyledTitle>
      </div>
    </StyledEmptyList>
  )
}