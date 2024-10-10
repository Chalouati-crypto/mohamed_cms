import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

}
button[disabled] {
    cursor: url('/warning-icon.svg'), auto; 
};
:root{
    --color-black:#07040D;
    --color-dark-grey:#1F1C23;
    --color-white:#FCFCFC;
    --color-blue:#3D72E3;
    --color-green:#41DECE;
    --color-red:#B64229;
    --color-yellow:#DCB848;
    --color-grey:#47464D;
}
`;
export default GlobalStyles;
