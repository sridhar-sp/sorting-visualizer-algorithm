import React, { PropsWithChildren } from "react";

import VerticalLine from "../components/VerticalLine";
import HorizontalList from "../components/HorizontalList";
import { SortVisualizerContainer } from "../../../../common/components/GlobalComponent";
import SortVisualizerScreenProp from "../../../types/SortVisualizerScreenProp";
import SortTitle from "../components/SortTitle";

const BubbleSortScreen = (
  props: PropsWithChildren<SortVisualizerScreenProp>
) => {
  const maxValue = Math.max(props.datasetMaxValue, props.screenHeight);
  return (
    <SortVisualizerContainer>
      <HorizontalList>
        {props.dataset.map((data) => (
          <VerticalLine
            key={data}
            height={(data / maxValue) * 100 + "%"}
            width={"50px"}
          />
        ))}
      </HorizontalList>
      <h2>AAasdasdasdasdasdasdA</h2>
      <SortTitle>{props.name}</SortTitle>
    </SortVisualizerContainer>
  );
};

export default BubbleSortScreen;
