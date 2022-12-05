import React from 'react'
import { StyledUl } from './style'
import { TecnologiesCard } from './TecnologiesCard'

export const TecnologiesList = (userLogged) => {
  return (
    <StyledUl>
      <TecnologiesCard />
    </StyledUl>
  )
}
