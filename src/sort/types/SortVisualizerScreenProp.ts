import ArrayData from "./ArrayData";

type SortVisualizerScreenProp = {
  name: string;
  datasetMaxValue: number;
  screenHeight: number;
  screenWidth: number;
  dataset: Array<ArrayData>;
};

export default SortVisualizerScreenProp;
