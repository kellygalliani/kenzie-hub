import React, { useContext } from 'react'
import { TechsContext } from '../../../contexts/TechsContext'
import { StyledTitle } from '../../styles/thypograph'
import { StyledLi } from './style'

export const TecnologiesCard= ({technology, showModal}) => {
  const {setModaIsOpen, modalIsOpen, technologies, selectedTechnology, setSelectedTechnology} = useContext(TechsContext)
  return (
    <StyledLi key={technology.id} onClick={()=>showModal("edit", technology)}> {/* COMO APLICAR HOVER NO CHILDREN? (quero que a tag p fique branca qndo o hover for na li) */}
        <StyledTitle tag="h3" color="Grey-0" type="title3">{technology.title}</StyledTitle>
        <StyledTitle tag="p" color="Grey-1" type="Headline">{technology.status}</StyledTitle>
    </StyledLi>
  )
}