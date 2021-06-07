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
  display: flex;

  align-items: center;

  padding: 8px;
`;

const DropDown = styled.select`
  padding: 8px;
  font-size: 16px;

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

const Input = styled.input`
  font-size: 16px;
  padding: 8px;

  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  border-width: 1px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.onSurface};
  }
  :hover {
    opacity: 0.85;
  }

  outline: none;
`;

const PrimaryButton = styled.button`
  font-size: 16px;
  padding: 8px;
  min-width: 75px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};

  :hover {
    opacity: 0.85;
  }
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FooterLinkText = styled.div`
  flex-direction: row;
  display: flexbox;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px;

  :hover {
    opacity: 0.85;
  }
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const FooterTitle = styled.h1`
  color: ${({ theme }) => theme.colors.onSurface};
  font-size: 18px;
  text-align: center;
  margin-left: 8px;
`;

const Link = styled.a`
  text-decoration: none;
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
  Input,
  PrimaryButton,
  Logo,
  FooterTitle,
  FooterLinkText,
  Link,
};
