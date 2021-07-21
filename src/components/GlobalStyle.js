import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body{
    background: white;
    font-family: 'Lato', sans-serif;
}

h2{
    font-weight: lighter;
    font-size: 2rem;  
}

h4{
    font-weight: bold;
}
a{
    font-size: 1.1rem;
}



`

export default GlobalStyle;