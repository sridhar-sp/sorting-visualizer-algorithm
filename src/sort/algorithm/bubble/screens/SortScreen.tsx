import React, { PropsWithChildren } from 'react'

import VerticalLine from '../components/VerticalLine'
import HorizontalList from '../components/HorizontalList'
import {
  PrimaryButton,
  SortVisualizerContainer,
} from '../../../../common/components/GlobalComponent'
import SortVisualizerScreenProp from '../../../types/SortVisualizerScreenProp'
import useSortAlgorithm from '../useSortAlgorithm'

const SortScreen = (props: PropsWithChildren<SortVisualizerScreenProp>) => {
  console.log('Component re-render')

  const {
    maxValue,
    data,
    swapIndices,
    isSortingInProgress,
    initiateSort,
  } = useSortAlgorithm(props)

  return (
    <SortVisualizerContainer>
      <HorizontalList>
        {data.map((item, index, arr) => (
          <VerticalLine
            key={item.key}
            height={(item.data / maxValue) * 100 + '%'}
            width={'50px'}
            isSelected={index === swapIndices[0] || index === swapIndices[1]}
          />
        ))}
      </HorizontalList>

      <PrimaryButton
        disabled={isSortingInProgress}
        onClick={() => initiateSort()}
      >
        Start
      </PrimaryButton>
    </SortVisualizerContainer>
  )
}

export default SortScreen
