import React from 'react'
import { StyledTitle } from '../../styles/thypograph'
import { StyledLi } from './style'
import { FaEdit } from "react-icons/fa"

export const TecnologiesCard= ({technology, showModal}) => {
  return (
    <StyledLi key={technology.id} onClick={()=>showModal("edit", technology)}> {/* COMO APLICAR HOVER NO CHILDREN? (quero que a tag p fique branca qndo o hover for na li) */}
      <StyledTitle tag="h3" color="Grey-0" type="title3">{technology.title}</StyledTitle>
      <div>
        <StyledTitle tag="p" color="Grey-1" type="Headline">{technology.status}</StyledTitle>
        <FaEdit/>
      </div>
      
    </StyledLi>
  )
}