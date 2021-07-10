import { createGlobalStyle } from "styled-components"

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
}

h2{
    font-weight: lighter;
    font-size: 2rem;  
}
h3{
    color: white;
}
h4{
    font-weight: bold;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color: #23d997;
}


`

export default GlobalStyle;