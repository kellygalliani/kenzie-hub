import React, { useContext } from 'react'
import { TechsContext } from '../../contexts/TechsContext'
import { EmptyList } from './EmptyList'
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
  } else{
    return (
      <EmptyList showModal={showModal}/>
    )
  } 

  /* return (
    <StyledUl>
      {technologies.length > 0 ?
        technologies.map((technology) => {
          return <TecnologiesCard  technology={technology} showModal={showModal} />
        } ) :
        <h1>Sem tech</h1>
      }
    </StyledUl>
  ) */
  
}
