import styled from "styled-components";

type VerticalLineProp = {
  height: any;
  width: any;
  isSelected: boolean;
};

const VerticalLine = styled.div.attrs((props: VerticalLineProp) => ({
  height: props.height,
  width: props.width,
  isSelected: props.isSelected,
  style: {
    height: props.height,
    width: props.width,
  },
}))`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.secondary};
  margin-left: 0.1%;
  margin-right: 0.1%;
  display: flex;
`;

export default VerticalLine;
