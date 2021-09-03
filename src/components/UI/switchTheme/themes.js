import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    body: "#f1e2c5",
    fontColor: "#000",
};

export const darkTheme = {
    body: "#422f2f",
    fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }
`;

