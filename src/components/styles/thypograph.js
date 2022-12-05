import styled, { css } from "styled-components";
import { BaseTitle } from "./components/BaseTitle";


export const StyledTitle = styled(BaseTitle)`

    ${({color}) => { 
        switch(color) {
            case "Color-primary":
                return css`
                    color: var(--Color-primary);
                ` ;
            case "Color-primary-Focus":
                return css`
                    color: var(--Color-primary-Focus);
                `;
            case "Color-primary-Negative":
                return css`
                    color: var(--Color-primary-Negative);
                `;
            case "Grey-4":
                return css`
                    color: var(--Grey-4);
                `;
            case "Grey-3":
                return css`
                    color: var(--Grey-3);
                `;
            case "Grey-2":
                return css`
                    color: var(--Grey-2);
                `;
            case "Grey-1":
                return css`
                    color: var(--Grey-1);
                `;
            case "Grey-0":
                return css`
                    color: var(--Grey-0);
                `;
        };
    }};

    ${({type}) => { 
        switch(type) {
            case "title1":
                return css`
                    font-weight: 700;
                    font-size: 18.273px;
                    line-height: 28px;
                ` ;
            case "title2":
                return css`
                    font-weight: 600;
                    font-size: 16.2426px;
                    line-height: 26px;
                `;
            case "title3":
                return css`
                    font-weight: 700;
                    font-size: 14.2123px;
                    line-height: 24px;
                `;
            case "Headline":
                return css`
                    font-weight: 400;
                    font-size: 12.182px;
                    line-height: 22px;
                `;
            case "HeadlineBold":
                return css`
                    font-weight: 600;
                    font-size: 12.182px;
                    line-height: 18px;
                `;
            case "HeadlineItalic":
                return css`
                    font-weight: 400;
                    font-size: 12.182px;
                    line-height: 18px;
                `;
        }
            
    }}
`;