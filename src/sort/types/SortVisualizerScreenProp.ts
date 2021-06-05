import ArrayData from "./ArrayData";

type SortVisualizerScreenProp = {
  name: string;
  screenHeight: number;
  screenWidth: number;
  executionDelayInMillis: number;
  datasetMaxValue: number;
  dataset: Array<ArrayData>;
};

export default SortVisualizerScreenProp;
