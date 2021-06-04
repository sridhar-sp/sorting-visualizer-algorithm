import React, { PropsWithChildren } from "react";

type Props = {
  name: string;
};

const BubbleSortScreen = (props: PropsWithChildren<Props>) => {
  return <h1>{props.name}</h1>;
};

export default BubbleSortScreen;
