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
import { yupResolver } from "@hookform/resolvers/yup"
import { formCreateAndEditTechSchema } from './formCreateAndEditTechSchema'

export const Dashboard = () => {
  const {userLogged, userLogout} = useContext(AuthContext)
  const {setModaIsOpen, modalIsOpen, createTechnologies, selectedTechnology, setSelectedTechnology, editTechnologies, deleteTechnologies} = useContext(TechsContext)
  const [modalContent, setModalContent] = useState("")

  const { register, handleSubmit, setValue, formState:{errors}} = useForm({
   resolver: yupResolver(formCreateAndEditTechSchema),
   mode: "onChange"
  })

  const submit = (data, event)=>{

    if(event.nativeEvent.submitter.innerText === "Cadastrar Tecnologia"){
      createTechnologies(data)
    } else if (event.nativeEvent.submitter.innerText === "Salvar Alterações"){
      editTechnologies(data, selectedTechnology.id)
    } else if(event.nativeEvent.submitter.innerText === "Excluir"){
      deleteTechnologies(selectedTechnology.id)
    }
  }

  const showModal = (type, tech) =>{
    setModaIsOpen(true)
    setModalContent(type)
    setValue("title", "")
    setValue("status", "")
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
              {errors.title && <span>{errors.title.message}</span>}
              
              <InputBox label="Selecionar Status" type="select" id="status" placeholder="Escolher um status" register={register("status")} disabled={false}>
                <option value="">Selecione o Status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </InputBox>
              {errors.status && <span>{errors.status.message}</span>}
              
              <StyledButton type="submit" color="primary" buttonType="modal">Cadastrar Tecnologia</StyledButton>
            </form>
          </Modal>  
      )
    } else if (modalContent === "edit") {
      return (
        <Modal title={"Detalhes da tecnologia"} closeModal={closeModal}>
            <form onSubmit={handleSubmit(submit)}>
              
              <InputBox label="Nome" type="text" id="name" placeholder={"Escreva o nome da Tecnologia"} register={register("title")} disabled={false}/>
              {errors.title && <span>{errors.title.message}</span>}
              
              <InputBox label="Selecionar Status" type="select" id="status" placeholder="Escolher um status" register={register("status")} disabled={false}>
                <option value="">Selecione o Status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </InputBox>
              {errors.status && <span>{errors.status.message}</span>}
              
              <div>
                <div>
                <StyledButton type="submit" color="primary" buttonType="modal">Salvar Alterações</StyledButton>
                </div>
                <div>
                <StyledButton type="submit" color="greyBig" buttonType="modal">Excluir</StyledButton>
                </div>
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
