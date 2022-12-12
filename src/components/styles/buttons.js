import styled, { css } from 'styled-components'


export const StyledButton = styled.button `

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4.06066px;
    font-weight: 500;
    font-size: 16px;
    padding: 0, 22px;
    
    ${({color}) => {
        switch(color){
            case "primary":
                return css`
                    background-color: var(--Color-primary);
                    border: 2px solid var(--Color-primary)
                    color: var(--Grey-0);
                    
                    &:hover{
                        background-color: var(--Color-primary-Focus);
                        border: 2px solid var(--Color-primary-Focus)
                    }
                    &:disabled{
                        background-color: var(--Color-primary-Negative);
                        border: 2px solid var(--Color-primary-Negative);
                        cursor: default;
                    }
                `
            case "greyBig":
                return css`
                    background-color: var(--Grey-1);
                    border: 2px solid var(--Grey-1)
                    color: var(--Grey-0);
                    
                    &:hover{
                        background-color: var(--Grey-2);
                        border: 2px solid var(--Grey-2)
                    }
                `
            case "greySmall":
                return css`
                    background-color: var(--Grey-3);
                    border: 2px solid var(--Grey-3)
                    color: var(--Grey-0);
                    
                    &:hover{
                        background-color: var(--Grey-2);
                        border: 2px solid var(--Grey-2)
                    }
                `
                
        }
    }}

    ${({buttonType}) => {
        switch(buttonType){
            case "big":
                return css`
                    padding: 0px 22px;
                    min-width: 133px;
                    height: 38px;
                    border-radius: 4px;
                    font-weight: 500;
                    font-size: 16px;
                    color:var(--Grey-0);
                `
            case "small":
                return css` 
                    padding: 0px 16px;
                    min-width: 100px;
                    height: 32px;
                    border-radius: 4px;
                    font-weight: 600;
                    font-size: 12px;
                `
            case "small_forIcon":
                return css` 
                    width: 32.49px;
                    height: 32px;
                    border-radius: 4px;
                    font-weight: 600;
                    font-size: 12px;
                `
            case "modal":
                return css` 
                    width: 100%;
                    height: 38px;
                    border-radius: 4px;
                    font-weight: 600;
                    font-size: 12px;
                `
        }
    }}
`


