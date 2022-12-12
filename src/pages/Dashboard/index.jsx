import React from 'react'
import Logo from '../../assets/Logo.svg'
import { StyledDashboard } from './style'
import { Container } from '../../components/styles/grid'
import { StyledTitle } from '../../components/styles/thypograph'
import { StyledButton } from '../../components/styles/buttons'
import { TecnologiesList } from '../../components/TecnologiesList'
import { HiPlusSm } from "react-icons/hi"
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Modal } from '../../components/Modal'
import { InputBox } from '../../components/Form/Input'
import { useForm } from 'react-hook-form'
import { TechsContext } from '../../contexts/TechsContext'

export const Dashboard = () => {
  const {userLogin, userLogged, userLogout} = useContext(AuthContext)
  const {setModaIsOpen, modalIsOpen, createTechnologies, technologies, selectedTechnology, setSelectedTechnology} = useContext(TechsContext)
  const [modalContent, setModalContent] = useState("")

  const { register, handleSubmit, setValue} = useForm({
   /*  resolver: yupResolver(loginSchema), */
  })

  const submit = (data, event)=>{
    
    if(event.nativeEvent.submitter.innerText === "Cadastrar Tecnologia"){
      createTechnologies(data)

    } else if (event.nativeEvent.submitter.innerText === "Salvar Alterações"){
      console.log("cliquei em editar")
    } else if(event.nativeEvent.submitter.innerText === "Excluir"){
      console.log("cliquei em excluir")
    }
    
  }

  const showModal = (type, tech) =>{
    setModaIsOpen(true)
    setModalContent(type)
    setValue("title", "")
    if(tech){
      setSelectedTechnology(tech)
      setValue("title", tech.title)
      setValue("status", tech.status)
    }
  }
  const closeModal = () =>{
    setModaIsOpen(false)   
  }
  const modal = () => {
    if(modalContent === "create"){
      return (
        <Modal  title={"Cadastrar Tecnologia"} closeModal={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
              <InputBox label="Nome" type="text" id="name" placeholder="Escreva o nome da Tecnologia"  register={register("title")} disabled={false}/>
              <InputBox label="Selecionar Status" type="select" id="status" placeholder="Escolher um status" register={register("status")} disabled={false}>
                <option value="">Selecione o Status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </InputBox>
              <StyledButton type="submit" color="primary" buttonType="modal">Cadastrar Tecnologia</StyledButton>
            </form>
          </Modal>  
      )
    } else {
      return (
        <Modal title={"Detalhes da tecnologia"} closeModal={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
              <InputBox label="Nome" type="text" id="name" placeholder={"Escreva o nome da Tecnologia"} register={register("title")} disabled={false}/>
              <InputBox label="Selecionar Status" type="select" id="status" placeholder="Escolher um status" register={register("status")} disabled={false}>
                <option value="">Selecione o Status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </InputBox>
              <div>
                <StyledButton type="submit" color="primary" buttonType="modal">Salvar Alterações</StyledButton>
                <StyledButton type="submit" color="greyBig" buttonType="modal">Excluir</StyledButton>
              </div>
            </form>
          </Modal> ) 
    }
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
               <HiPlusSm onClick={()=>showModal("create")}/>               
            </div>
            <TecnologiesList userLogged={userLogged} showModal={showModal}/>
          </section>
        </Container>
        
      )}
      { modalIsOpen && modal() } 
      
    </StyledDashboard>
  )
}
