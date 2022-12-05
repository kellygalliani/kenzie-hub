import React from 'react'
import { StyledTitle } from '../../styles/thypograph'
import { StyledLi } from './style'

export const TecnologiesCard= ({tech}) => {
  return (
    <StyledLi> {/* COMO APLICAR HOVER NO CHILDREN? (quero que a tag p fique branca qndo o hover for na li) */}
        <StyledTitle tag="h3" color="Grey-0" type="title3">React JS</StyledTitle>
        <StyledTitle tag="p" color="Grey-1" type="Headline">Intermediário</StyledTitle>
    </StyledLi>
  )
}