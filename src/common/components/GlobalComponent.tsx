import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  flex-flow: column;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.surface};
`;

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
`;

const ToolBar = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  flex-direction: row;
  display: flexbox;

  align-items: center;
  padding: 8px;
`;

const DropDown = styled.select`
  padding: 8px;
  font-size: 14px;

  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  outline: none;

  :hover {
    opacity: 0.85;
  }
`;
const DropDownItem = styled.option``;

const SortVisualizerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export {
  Container,
  Header,
  HeaderTitle,
  Content,
  Footer,
  ToolBar,
  DropDown,
  DropDownItem,
  SortVisualizerContainer,
};
