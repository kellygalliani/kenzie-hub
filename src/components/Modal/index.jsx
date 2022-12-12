import React from 'react'
import { IoIosClose } from "react-icons/io";
import { StyledTitle } from '../styles/thypograph';
import { ContentModalStyled, ModalBackgroundStyled } from './style';

export const Modal = ({children, title, closeModal}) => {
  return (
   <ModalBackgroundStyled>
      <ContentModalStyled>
        <header>
          <StyledTitle tag="h2" type="title3" color="Grey-0">{title}</StyledTitle>
          <IoIosClose onClick={() => closeModal()}/>
        </header>
        {children}
      </ContentModalStyled>
   </ModalBackgroundStyled>
  )
}
