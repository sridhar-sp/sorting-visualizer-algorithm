import styled from "styled-components";

type VerticalLineProp = {
  height: any;
  width: any;
};

const VerticalLine = styled.div.attrs((props: VerticalLineProp) => ({
  height: props.height,
  width: props.width,
  style: {
    height: props.height,
    width: props.width,
  },
}))`
  background-color: ${({ theme }) => theme.colors.onSurface};
  margin-left: 0.1%;
  margin-right: 0.1%;
  display: flex;
`;

export default VerticalLine;
