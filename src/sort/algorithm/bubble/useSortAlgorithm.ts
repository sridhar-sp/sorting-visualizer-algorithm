import { useCallback, useEffect, useRef, useState } from 'react'
import { sleep } from '../../../utils/utils'
import ArrayData from '../../types/ArrayData'

import SortVisualizerScreenProp from '../../types/SortVisualizerScreenProp'

type SortAlgorithmReturnType = {
  initiateSort: Function
  data: Array<ArrayData>
  swapIndices: Array<number>
  isSortingInProgress: boolean
  maxValue: number
}

const useSortAlgorithm = (
  props: SortVisualizerScreenProp,
): SortAlgorithmReturnType => {
  const maxValue = Math.max(props.datasetMaxValue, props.screenHeight)

  const [data, setData] = useState<Array<ArrayData>>(props.dataset)

  const [swapIndices, setSwapIndices] = useState([-1, -1])

  const [isSortingInProgress, setIsSortingInProgress] = useState(false)

  const isComponentActive = useRef<boolean>(false)

  const cleanupCallback = useCallback(() => {
    console.log('Cleaning up * sort screen')
    isComponentActive.current = false
  }, [])

  useEffect(() => {
    setData(props.dataset)
    isComponentActive.current = true
    return cleanupCallback
  }, [cleanupCallback, props.dataset])

  const initiateBubbleSort = async () => {
    console.log('Running bubble sort')

    props.exectionStatusCallback(true)
    setIsSortingInProgress(true)

    let swapIndex1 = 1
    let swapIndex2 = -1

    for (let i = 0; i < data.length && isComponentActive.current; i++) {
      let isSwapOccured = false
      for (let j = 0; j < data.length - 1 && isComponentActive.current; j++) {
        if (data[j].data > data[j + 1].data) {
          const temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp

          isSwapOccured = true
          swapIndex1 = j
          swapIndex2 = j + 1
        }

        if (isSwapOccured) {
          setData((a) => data.slice())
          setSwapIndices([swapIndex1, swapIndex2])
          await sleep(props.executionDelayInMillis)
        }
      }
      if (!isSwapOccured) break
    }

    props.exectionStatusCallback(false)
    setIsSortingInProgress(false)
  }

  const initiateSelectionSort = async () => {
    console.log('Running selection sort')

    props.exectionStatusCallback(true)
    setIsSortingInProgress(true)

    let swapIndex1 = 1
    let swapIndex2 = -1

    for (let i = 0; i < data.length - 1 && isComponentActive.current; i++) {
      let minIndex = i
      for (let j = i + 1; j < data.length && isComponentActive.current; j++) {
        if (data[j].data < data[minIndex].data) {
          minIndex = j
        }
      }
      if (minIndex !== i) {
        const temp = data[i]
        data[i] = data[minIndex]
        data[minIndex] = temp

        setData((a) => data.slice())
        setSwapIndices([swapIndex1, swapIndex2])
        await sleep(props.executionDelayInMillis)
      }
    }

    props.exectionStatusCallback(false)
    setIsSortingInProgress(false)
  }

  const initiateSort = () => {
    switch (props.sortAlgorithmId) {
      case 'bubble_sort':
        initiateBubbleSort()
        break
      case 'selection_sort':
        initiateSelectionSort()
        break
      default:
        console.log('Unknow sort id')
        break
    }
  }

  return {
    initiateSort,
    data,
    swapIndices,
    isSortingInProgress,
    maxValue,
  }
}

export default useSortAlgorithm
