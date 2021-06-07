import React, { FunctionComponent, PropsWithChildren } from "react";
import { DropDown, DropDownItem } from "./GlobalComponent";

type Item = {
  key: string;
  name: string;
};

type Props = {
  disabled: boolean;
  dropdownList: Array<Item>;
  title?: string;
  value?: string;
  onChange?: (id: string) => void | null;
};

const DropdownList: FunctionComponent<Props> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <DropDown
      {...props}
      onChange={(e) => {
        props.onChange?.(e.target.value);
      }}
    >
      {props.dropdownList.map((item) => (
        <DropDownItem key={item.key} value={item.key}>
          {item.name}
        </DropDownItem>
      ))}
    </DropDown>
  );
};

export default DropdownList;
