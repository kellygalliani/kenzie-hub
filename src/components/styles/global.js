import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
   }
   button{
        cursor:pointer;
   } 
    body{
        font-family: 'Inter', sans-serif; 
    }
    :root{
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41;
        --Grey-1: #868E96;
        --Grey-0: #FFFFFF;
        --BackgroundModal: rgba(18, 18, 20, 0.5);
    }
   

`
