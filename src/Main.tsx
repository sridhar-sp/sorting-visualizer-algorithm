import { useState, useRef, useEffect } from "react";
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
import BubbleSortScreen from "./sort/algorithm/bubble/screens/BubbleSortScreen";
import { getTheme } from "./styles/Themes";
import { generateRandomNumbers } from "./utils/utils";
import ArrayData from "./sort/types/ArrayData";

const sortAlgorithmList = require("./assets/sort_algorithm_list.json");

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [sortAlgorithmId, setSortAlgorithmId] = useState("");

  const [datasetMaxValue, setDatasetMaxValue] = useState(1000);
  const [datasetLength, setDatasetLength] = useState(50);

  const [dataset, setDataset] = useState<Array<ArrayData>>(
    generateRandomNumbers(datasetMaxValue, datasetLength)
  );

  const [contentHeight, setContentHeight] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = contentRef?.current?.clientHeight;
    setContentHeight(height ? height : 0);

    const width = contentRef?.current?.clientWidth;
    setContentWidth(width ? width : 0);

    console.log("Height " + height + " Width " + width);
  }, [contentRef]);

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
        <Content ref={contentRef}>
          {dataset &&
            getSortingVisualizerScreen(
              sortAlgorithmId,
              dataset,
              datasetMaxValue,
              contentHeight,
              contentWidth
            )}
        </Content>

        <Footer>
          <HeaderTitle>Footer</HeaderTitle>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

const getSortingVisualizerScreen = (
  sortAlgorithmId: string,
  dataset: Array<ArrayData>,
  datasetMaxValue: number,
  height: number,
  width: number
) => {
  switch (sortAlgorithmId) {
    case "1":
      return (
        <BubbleSortScreen
          name="Bubble sort"
          dataset={dataset}
          screenHeight={height}
          screenWidth={width}
          datasetMaxValue={datasetMaxValue}
        />
      );
    case "2":
      return (
        <BubbleSortScreen
          name="Selectino sort"
          dataset={dataset}
          screenHeight={height}
          screenWidth={width}
          datasetMaxValue={datasetMaxValue}
        />
      );
    case "3":
      return (
        <BubbleSortScreen
          name="Quick sort"
          dataset={dataset}
          screenHeight={height}
          screenWidth={width}
          datasetMaxValue={datasetMaxValue}
        />
      );
    default:
      return (
        <BubbleSortScreen
          name="Please select a sorting algorithm"
          dataset={dataset}
          screenHeight={height}
          screenWidth={width}
          datasetMaxValue={datasetMaxValue}
        />
      );
  }
};

export default App;
