import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import VerticalLine from "../components/VerticalLine";
import HorizontalList from "../components/HorizontalList";
import {
  PrimaryButton,
  SortVisualizerContainer,
} from "../../../../common/components/GlobalComponent";
import SortVisualizerScreenProp from "../../../types/SortVisualizerScreenProp";
import { sleep } from "../../../../utils/utils";
import ArrayData from "../../../types/ArrayData";

const BubbleSortScreen = (
  props: PropsWithChildren<SortVisualizerScreenProp>
) => {
  const maxValue = Math.max(props.datasetMaxValue, props.screenHeight);

  console.log("Component re-render");

  const [data, setData] = useState<Array<ArrayData>>(props.dataset);

  const [swapIndices, setSwapIndices] = useState([-1, -1]);

  const isComponentActive = useRef<boolean>(false);

  const cleanupCallback = useCallback(() => {
    console.log("Cleaning up bubble sort screen");
    isComponentActive.current = false;
  }, []);

  useEffect(() => {
    setData(props.dataset);
    isComponentActive.current = true;
    return cleanupCallback;
  }, [cleanupCallback, props.dataset]);

  const initiateBubbleSort = async () => {
    console.log("Initated bubble sort");

    let swapIndex1 = 1;
    let swapIndex2 = -1;

    for (let i = 0; i < data.length && isComponentActive.current; i++) {
      let isSwapOccured = false;
      for (let j = 0; j < data.length - 1 && isComponentActive.current; j++) {
        if (data[j].data > data[j + 1].data) {
          const temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;

          isSwapOccured = true;
          swapIndex1 = j;
          swapIndex2 = j + 1;

          console.log(
            "Running swapping elements swapIndex1 " +
              swapIndex1 +
              " swapIndex2 " +
              swapIndex2
          );
        }

        if (isSwapOccured) {
          setData((a) => data.slice());
          setSwapIndices([swapIndex1, swapIndex2]);
          await sleep(props.executionDelayInMillis);
        }
      }
      if (!isSwapOccured) break;
    }
  };

  return (
    <SortVisualizerContainer>
      <HorizontalList>
        {data.map((item, index, arr) => (
          <VerticalLine
            key={item.key}
            height={(item.data / maxValue) * 100 + "%"}
            width={"50px"}
            isSelected={index === swapIndices[0] || index === swapIndices[1]}
          />
        ))}
      </HorizontalList>

      <PrimaryButton onClick={() => initiateBubbleSort()}>
        Start sorting
      </PrimaryButton>
    </SortVisualizerContainer>
  );
};

export default BubbleSortScreen;
