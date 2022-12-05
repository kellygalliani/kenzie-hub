import styled from 'styled-components'

export const StyledDashboard = styled.div`
    background: var(--Grey-4);
    width: 100%;
    min-height: 100vh;

    div{
        border-bottom: 1px solid var(--Grey-3);
    }
    header{
        width: 100%;
        height: 72px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header > button{
        background: var(--Grey-3);
        border-radius: 4px;
        padding: 10px 16.2426px;
        color: var(--Grey-0);
        font-weight: 600;
        font-size: 12px;  
    }
    section > div {
        border: none;
    }
    .section_1{
        width: 100%;
        min-height: 118px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .section_2{
        width: 100%;
        padding: 11px 0;
        
        display: flex;
        flex-direction: column;
        gap: 21px;
    }
    .section_2 > :nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .section_2 > :nth-child(2) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

    
`