import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
}

body{
   background-color: #437F97;
}


`;

export default GlobalStyle;
