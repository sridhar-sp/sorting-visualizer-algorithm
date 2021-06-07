type DropDownItem = {
  key: string;
  name: string;
};

type Config = {
  showAdvancedControls: boolean;
  minDatasetValue: number;
  maxDatasetValue: number;
  minDatasetSize: number;
  maxDatasetSize: number;
  sortAlgorithm: any;
  executionDelayInMilliseconds: any;
};

export default Config;
