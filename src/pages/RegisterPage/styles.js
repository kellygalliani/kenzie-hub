import styled from 'styled-components'

export const StyledRegisterPage = styled.main`
    background: var(--Grey-4);
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 58px 0;

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 369px;
    }
    div > img{
        width: 122.06px;
        height: 21.21px;
    }
    div > button{
        background: var(--Grey-3);
        border-radius: 4px;
        padding: 10px 16.2426px;
        font-weight: 600;
        font-size: 12px;
        
    }
    .link{
        text-decoration: none;
        color: var(--Grey-0);
    }
    @media (max-width: 411px) {
        div{
            width: 90%;
        }
    }
` 