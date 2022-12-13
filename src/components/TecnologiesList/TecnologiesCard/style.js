import styled from 'styled-components'

export const StyledLi = styled.li`
    width: 100%;
    height: 49px;
    padding: 0 22px;

    background: var(--Grey-4);
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    :hover {
        background: var(--Grey-2);
        cursor: pointer;
    }
    svg{
        color: var(--Grey-1);
        width: 15px;
        height: 15px;
    }
    div{
        display: flex;
        align-items: center;
        gap: 35px;
        border-bottom: none !important;
    }

`