import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Header,
  HeaderTitle,
  Content,
  Footer,
  Container,
  ToolBar,
} from "./common/components/GlobalComponent";
import DropdownList from "./common/components/DropdownList";
import BubbleSortScreen from "./sort/algorithm/screens/BubbleSortScreen";
import { getTheme } from "./styles/Themes";

const sortAlgorithmList = require("./assets/sort_algorithm_list.json");

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [sortAlgorithmId, setSortAlgorithmId] = useState("");

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
        <ToolBar>
          <DropdownList
            dropdownList={sortAlgorithmList}
            title="Select a sorting algorithm"
            onChange={setSortAlgorithmId}
          />
        </ToolBar>
        <Content>{getSortingVisualizerScreen(sortAlgorithmId)}</Content>

        <Footer>
          <HeaderTitle>Footer</HeaderTitle>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

const getSortingVisualizerScreen = (sortAlgorithmId: string) => {
  switch (sortAlgorithmId) {
    case "1":
      return <BubbleSortScreen name="Bubble sort" />;
    case "2":
      return <BubbleSortScreen name="Selectino sort" />;
    case "3":
      return <BubbleSortScreen name="Quick sort" />;
    default:
      return <BubbleSortScreen name="Please select a sorting algorithm" />;
  }
};

export default App;
