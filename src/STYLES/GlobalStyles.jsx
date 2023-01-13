import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --BackgroundWhite: #fff;
    --DeepBlack: hsla(0, 0%, 2%, 1);
    --LightBlack: hsla(0, 13%, 3%, 1);
    --LightYellow: hsla(41, 100%, 61%, 1);
    --GreenColor: hsla(161, 93%, 23%, 1);
    --OutlineGreen: hsla(161, 93%, 23%, 0.35);
    --LightGreen: hsla(162, 54%, 44%, 1);
    --LightBlue: hsla(164, 35%, 94%, 1);
}


html{
    font-size: 70.5%;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
body{
    font-family: 'Public Sans', sans-serif;
}
a{
    color: var(--LightBlack);
    font-size: 15px;
    font-family: "Manrope";
    font-weight: 600;
}
`;

export default GlobalStyle;