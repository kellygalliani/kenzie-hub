import React from 'react'
import Logo from '../../assets/Logo.svg'
import { StyledDashboard } from './style'
import { Container } from '../../components/styles/grid'
import { StyledTitle } from '../../components/styles/thypograph'
import { StyledButton } from '../../components/styles/buttons'
import { TecnologiesList } from '../../components/TecnologiesList'
import { HiPlusSm } from "react-icons/hi";
import Modal from 'react-modal'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

Modal.setAppElement('#root')

export const Dashboard = () => {
  const {userLogin, userLogged, userLogout} = useContext(AuthContext)
  const [modalIsOpen, setModaIsOpen] = useState(false)

  const showModal = () =>{
    setModaIsOpen(true)
  }
  const closeModal = () =>{
    setModaIsOpen(false)
  }
  return (
    <StyledDashboard>
      <div>
        <Container>
          <header>
            <img src={Logo} alt="logoKenzieHub"/>
            <StyledButton  onClick={()=> userLogout()}>Sair</StyledButton>
          </header>
        </Container>
      </div>
      
      {userLogged && (
        <div>
        <Container>
          <section className="section_1">
              <StyledTitle tag="h1" color="Grey-0" type="title1">Olá, {userLogged.name}</StyledTitle>
              <StyledTitle tag="p" color="Grey-1" type="Headline">{userLogged.course_module}</StyledTitle>
          </section>
        </Container>
      </div>
      )}
      
      {userLogged && (
        <Container>
          <section className="section_2">
            <div>
               <StyledTitle tag="h1" color="Grey-0" type="title1">Tecnologias</StyledTitle>
               <HiPlusSm onClick={showModal}/>
               
            </div>
            <TecnologiesList userLogged={userLogged}/>
          </section>
          
        </Container>
        
      )}
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay" 
      >
        <h1>Hello</h1>
        <button onClick={closeModal}>X</button>
      </Modal>   
      
    </StyledDashboard>
  )
}
