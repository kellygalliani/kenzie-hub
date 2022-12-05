import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--Grey-0);
    max-width: 369px;
    width: 90%;
    padding: 34px 18px;
    gap:22px;

    background: var(--Grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    p{
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #868E96;
    }
    span{
        font-weight: 600;
        font-size: 12px;
        color: #A63D57;
    }
` 