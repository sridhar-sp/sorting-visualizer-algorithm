import React, { FunctionComponent, PropsWithChildren } from "react";
import { DropDown, DropDownItem } from "./GlobalComponent";

type Item = {
  id: string;
  name: string;
};

type Props = {
  dropdownList: Array<Item>;
  title: string;
  onChange?: (id: string) => void | null;
};

const DropdownList: FunctionComponent<Props> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <DropDown
      onChange={(e) => {
        props.onChange?.(e.target.value);
      }}
    >
      {props.dropdownList.map((item) => (
        <DropDownItem key={item.id} value={item.id}>
          {item.name}
        </DropDownItem>
      ))}
    </DropDown>
  );
};

export default DropdownList;
