import styled from "styled-components"

export const ModalBackgroundStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index:  1;
    top: 0;
    left: 0;
    background-color: var(--BackgroundModal);
`
export const ContentModalStyled = styled.div`
    width: 369px;
    max-width: 90%;
    height: auto;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    header{
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        justify-content: space-between;
        background: var(--Grey-2);
        border-radius: 4px 4px 0px 0px;
        color: var(--Grey-0);
    }
    svg{
        width: 25px;
        height: 25px;
        color: var(--Grey-1);
        cursor: pointer;
    }
    
    form {
        width: 100%;
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        button{
            margin-top: 20px;
            color: var(--Grey-0);
        }
        div{
            display: flex;
            gap: 22px;
        }
    }
    


`
