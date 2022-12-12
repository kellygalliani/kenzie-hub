import React, { useContext } from 'react'
import { TechsContext } from '../../contexts/TechsContext'
import { StyledUl } from './style'
import { TecnologiesCard } from './TecnologiesCard'



export const TecnologiesList = ({userLogged, showModal}) => {

  const {technologies} = useContext(TechsContext)
  if(technologies.length > 0){
    return (
    <StyledUl>
      {technologies.map((technology) => {
        return <TecnologiesCard  technology={technology} showModal={showModal} />
      } )}
    </StyledUl>
  )
  }
  
}
