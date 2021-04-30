import * as React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import styled from "styled-components";

const darkMode = {
    backgroundColor_ : "#2d2d2d",
    textColor_: "#fff"
}

const lightMode = {
    backgroundColor_ : "#fff",
    textColor_: "#2d2d2d"
}

const Wrapper = styled.div`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  height: auto;
  margin-left: 0;
  background-color: ${props => props.theme.backgroundColor_};
  color: ${props=>props.theme.textColor_};
`;

const DarkThemeProvider = ({ children }) => {
    const darkThemeEnabled = useSelector((state:any) => state.preferences.darkThemeEnabled);
    return (
        <ThemeProvider theme={darkThemeEnabled ? darkMode : lightMode }>
            <Wrapper>
                {children}
            </Wrapper>
        </ThemeProvider>
    );
};

export default DarkThemeProvider;