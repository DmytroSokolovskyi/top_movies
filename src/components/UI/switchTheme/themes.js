import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    body: "#f4f4f5",
    fontColor: "#000",
};

export const darkTheme = {
    body: "#474b47",
    fontColor: "#d5eaf8",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }
`;

