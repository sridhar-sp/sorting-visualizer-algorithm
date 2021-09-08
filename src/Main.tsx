import { useState, useRef, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Header,
  HeaderTitle,
  Content,
  Container,
  ToolBar,
  PrimaryButton,
  Link,
  FieldSet,
  FieldSetLegend,
  GithubIcon,
} from './common/components/GlobalComponent'
import DropdownList from './common/components/DropdownList'
import SortScreen from './sort/algorithm/screens/SortScreen'
import { getTheme } from './styles/Themes'
import {
  generateRandomNumbers,
  safeParseInt,
  getRandomInt,
} from './utils/utils'
import ArrayData from './sort/types/ArrayData'
import ToolbarNumberInput from './common/components/Input'
import Config from './sort/types/Config'
import ThemeModeIcon from './common/components/ThemeModeIcon'
const data: Config = require('./assets/data.json')

const App = () => {
  const [themeMode, setThemeMode] = useState('dark')

  const [sortAlgorithmId, setSortAlgorithmId] = useState('bubble_sort')
  const [executionDelayInMillis, setExecutionDelayInMillis] = useState(5)

  const [datasetMaxValue, setDatasetMaxValue] = useState(5000)
  const [datasetLength, setDatasetLength] = useState(50)
  const [dataset, setDataset] = useState<Array<ArrayData>>([])

  const [contentHeight, setContentHeight] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const [isSortingInProgress, setSortingInProgress] = useState(false)

  useEffect(() => {
    const height = contentRef?.current?.clientHeight
    setContentHeight(height ? height : 0)

    const width = contentRef?.current?.clientWidth
    setContentWidth(width ? width : 0)

    setDataset(generateRandomNumbers(datasetMaxValue, datasetLength))
  }, [contentRef, datasetMaxValue, datasetLength, sortAlgorithmId])

  const toggleTheme = () => {
    setThemeMode((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const generateNewDataset = () => {
    const maxValue = getRandomInt(data.minDatasetValue, data.maxDatasetValue)
    const maxSize = getRandomInt(data.minDatasetValue, data.maxDatasetSize)

    setDatasetMaxValue(maxValue)
    setDatasetLength(maxSize) // will trigger useEffect therefore populate new dataset
  }

  const currentTheme = getTheme(themeMode)

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Header>
          <HeaderTitle>Sorting algorithem visualizer</HeaderTitle>
          <ThemeModeIcon
            onClick={toggleTheme}
            themeMode={themeMode}
            fillColor={currentTheme.colors.onSurface}
          />
          <Link
            href="https://github.com/half-blood-prince/sorting-visualizer-algorithm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon fill={currentTheme.colors.onSurface} />
          </Link>
        </Header>

        <ToolBar>
          <FieldSet>
            <FieldSetLegend>Options</FieldSetLegend>
            <DropdownList
              disabled={isSortingInProgress}
              dropdownList={data.sortAlgorithm}
              title="Select a sorting algorithm"
              onChange={setSortAlgorithmId}
            />
            {!data.showAdvancedControls && (
              <DropdownList
                value={executionDelayInMillis.toString()}
                disabled={isSortingInProgress}
                dropdownList={data.executionDelayInMilliseconds}
                title="Select a execution delay"
                onChange={(ms) => {
                  setExecutionDelayInMillis(safeParseInt(ms, 0))
                }}
              />
            )}
            {data.showAdvancedControls && (
              <ToolbarNumberInput
                disabled={isSortingInProgress}
                placeholder={'Max value'}
                type={'number'}
                maxLength={10}
                onChange={(e) =>
                  setDatasetMaxValue(
                    Math.min(safeParseInt(e.target.value), 999999999),
                  )
                }
                value={datasetMaxValue}
              />
            )}

            {data.showAdvancedControls && (
              <ToolbarNumberInput
                disabled={isSortingInProgress}
                placeholder={'Number of data'}
                type={'number'}
                maxLength={5}
                onChange={(e) =>
                  setDatasetLength(
                    Math.min(safeParseInt(e.target.value), 99999),
                  )
                }
                value={datasetLength}
              />
            )}

            {data.showAdvancedControls && (
              <ToolbarNumberInput
                disabled={isSortingInProgress}
                placeholder={'Execution delay in ms'}
                type={'number'}
                maxLength={4}
                onChange={(e) =>
                  setExecutionDelayInMillis(
                    Math.min(safeParseInt(e.target.value), 9999),
                  )
                }
                value={executionDelayInMillis}
              />
            )}
            <PrimaryButton
              onClick={generateNewDataset}
              disabled={isSortingInProgress}
            >
              Generate new dataset
            </PrimaryButton>
          </FieldSet>
        </ToolBar>
        <Content ref={contentRef}>
          {dataset && (
            <SortScreen
              name={getSortAlgorithName(sortAlgorithmId)}
              sortAlgorithmId={sortAlgorithmId}
              dataset={dataset}
              screenHeight={contentHeight}
              screenWidth={contentWidth}
              datasetMaxValue={datasetMaxValue}
              executionDelayInMillis={executionDelayInMillis}
              exectionStatusCallback={setSortingInProgress}
            />
          )}
        </Content>
      </Container>
    </ThemeProvider>
  )
}

const getSortAlgorithName = (id: string): string => {
  const element = data.sortAlgorithm.find((e: any) => e.key.toString() === id)
  return element ? element.name : ''
}

export default App
