import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import VerticalLine from "../components/VerticalLine";
import HorizontalList from "../components/HorizontalList";
import { SortVisualizerContainer } from "../../../../common/components/GlobalComponent";
import SortVisualizerScreenProp from "../../../types/SortVisualizerScreenProp";
import SortTitle from "../components/SortTitle";
import { sleep } from "../../../../utils/utils";
import ArrayData from "../../../types/ArrayData";

const BubbleSortScreen = (
  props: PropsWithChildren<SortVisualizerScreenProp>
) => {
  const maxValue = Math.max(props.datasetMaxValue, props.screenHeight);

  console.log("Component re-render");

  const [counter, setCounter] = useState(0);

  const [data, setData] = useState<Array<ArrayData>>(props.dataset);

  const [swapIndices, setSwapIndices] = useState([-1, -1]);

  const isComponentActive = useRef<boolean>(true);

  const cleanupCallback = useCallback(() => {
    console.log("*** clean up ***");
    isComponentActive.current = false;
  }, []);

  useEffect(() => {
    return cleanupCallback;
  }, [cleanupCallback]);

  const initiateBubbleSort = async () => {
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
          setCounter(counter + 1);
          setSwapIndices([swapIndex1, swapIndex2]);
          await sleep(50);
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
      <SortTitle>
        Swap index [{swapIndices[0]}, {swapIndices[1]}]
      </SortTitle>
      <button onClick={() => initiateBubbleSort()}>{props.name}</button>
    </SortVisualizerContainer>
  );
};

export default BubbleSortScreen;
