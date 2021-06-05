import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import {
  Header,
  HeaderTitle,
  Content,
  Footer,
  Container,
  ToolBar,
  PrimaryButton,
} from "./common/components/GlobalComponent";
import DropdownList from "./common/components/DropdownList";
import BubbleSortScreen from "./sort/algorithm/bubble/screens/BubbleSortScreen";
import { getTheme } from "./styles/Themes";
import { generateRandomNumbers, safeParseInt } from "./utils/utils";
import ArrayData from "./sort/types/ArrayData";
import ToolbarNumberInput from "./common/components/Input";

const sortAlgorithmList = require("./assets/sort_algorithm_list.json");

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [sortAlgorithmId, setSortAlgorithmId] = useState("1");

  const [datasetMaxValue, setDatasetMaxValue] = useState(1000);
  const [datasetLength, setDatasetLength] = useState(10);
  const [executionDelayInMillis, setExecutionDelayInMillis] = useState(50);

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

    setDataset(generateRandomNumbers(datasetMaxValue, datasetLength));

    console.log("Height " + height + " Width " + width);
  }, [contentRef, datasetMaxValue, datasetLength]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const generateNewDataset = () => {
    setDataset(generateRandomNumbers(datasetMaxValue, datasetLength));
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

          <ToolbarNumberInput
            placeholder={"Max value"}
            type={"number"}
            maxLength={10}
            onChange={(e) =>
              setDatasetMaxValue(
                Math.min(safeParseInt(e.target.value), 999999999)
              )
            }
            value={datasetMaxValue}
          />
          <ToolbarNumberInput
            placeholder={"Number of data"}
            type={"number"}
            maxLength={5}
            onChange={(e) =>
              setDatasetLength(Math.min(safeParseInt(e.target.value), 99999))
            }
            value={datasetLength}
          />
          <ToolbarNumberInput
            placeholder={"Execution delay in ms"}
            type={"number"}
            maxLength={4}
            onChange={(e) =>
              setExecutionDelayInMillis(
                Math.min(safeParseInt(e.target.value), 9999)
              )
            }
            value={executionDelayInMillis}
          />
          <PrimaryButton onClick={generateNewDataset}>
            Generate new dataset
          </PrimaryButton>
        </ToolBar>
        <Content ref={contentRef}>
          {dataset &&
            getSortingVisualizerScreen(
              sortAlgorithmId,
              dataset,
              datasetMaxValue,
              contentHeight,
              contentWidth,
              executionDelayInMillis
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
  width: number,
  executionDelayInMillis: number
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
          executionDelayInMillis={executionDelayInMillis}
        />
      );
    case "2":
      return <HeaderTitle>Selection sort</HeaderTitle>;
    case "3":
      return (
        <BubbleSortScreen
          name="Quick sort"
          dataset={dataset}
          screenHeight={height}
          screenWidth={width}
          datasetMaxValue={datasetMaxValue}
          executionDelayInMillis={executionDelayInMillis}
        />
      );
    default:
      return <HeaderTitle>Please select a valid sorting algorithm</HeaderTitle>;
  }
};

export default App;
