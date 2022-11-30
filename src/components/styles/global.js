import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    .container{
    margin: 0 auto;
    width: 100%; /* - será sempre 100% desde que não fique maior que 1100*/
    max-width: 1400px;
    padding: 1rem;
    }

    .header{
        width: 100%;
        background: #F5F5F5;
    }
    .divContent{
        display: flex;
        flex-direction: column;
        gap: 2.188rem;
    }

    @media (min-width:900px) {
        .divContent{
            display: flex;
            gap: 2.188rem;
            flex-direction: row;
        }
    }
`
