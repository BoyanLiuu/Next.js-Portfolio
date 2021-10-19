import { createGlobalStyle } from "styled-components";
export const Theme = {};

export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 62.5%;
        
    }
    *,
    ::before,
    ::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        width:100%;
        font-family: 'Josefin Sans', sans-serif;
        overflow-x: hidden;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    
`;
