import ArrayData from './ArrayData'

type SortVisualizerScreenProp = {
  name: string
  sortAlgorithmId: string
  screenHeight: number
  screenWidth: number
  executionDelayInMillis: number
  datasetMaxValue: number
  dataset: Array<ArrayData>
  exectionStatusCallback: (isRunning: boolean) => void
}

export default SortVisualizerScreenProp
