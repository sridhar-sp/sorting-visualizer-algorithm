import React, { useState } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import {
  Header,
  HeaderTitle,
  Body,
  Footer,
  Container,
} from "./common/components/GlobalComponent";

import { getTheme } from "./styles/Themes";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Container>
        <Header>
          <HeaderTitle onClick={toggleTheme}>
            Sorting algorithem visualizer
          </HeaderTitle>
        </Header>
        <Body>
          <HeaderTitle>Body content</HeaderTitle>
        </Body>

        <Footer>
          <HeaderTitle>Footer</HeaderTitle>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
