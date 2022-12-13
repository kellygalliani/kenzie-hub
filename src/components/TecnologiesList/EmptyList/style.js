import styled from 'styled-components'

export const StyledEmptyList = styled.div`
    width: 100%;
    min-height: 80px;
    padding: 20px;

    background: var(--Grey-3);
    
    border-radius: 6px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    svg{
        color: var(--Grey-1);
    }
`