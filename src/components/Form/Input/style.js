import styled from 'styled-components'

export const StyledInputBox = styled.fieldset`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap:15px;
    color: var(--Grey-0);
    font-weight: 400;
    font-size: 12px;

    input, select{
        border: 0.9772px solid var(--Grey-2);
        border-radius: 3.20867px;
        height: 38.5px;
        background: var(--Grey-2);
        padding: 8px 13px;
        font-size: 14px;
        font-weight: 400;
        color: #F8F9FA;
    }
    input::placeholder, select::placeholder{
        color: var(--Grey-1);
    }
    input:focus-visible, select:focus-visible{
        border: 0.9772px solid #F8F9FA;
    }


` 