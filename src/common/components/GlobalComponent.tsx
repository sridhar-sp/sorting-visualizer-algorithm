import styled from 'styled-components'
import { ReactComponent as GithubLogo } from 'src/assets/github-logo.svg'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  flex-flow: column;
`

const H1 = styled.h1`
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 992px) {
    font-size: 22px;
  }
`

const HeaderTitle = styled(H1)`
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  justify-content: center;
  flex: 1;
`

const ToolBar = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  padding: 0px 8px;
`

const FieldSet = styled.fieldset`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 12px 16px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.onBackground};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
`

const FieldSetLegend = styled.legend`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  padding: 0px 4px;
`

const DropDown = styled.select`
  padding: 8px;
  font-size: 16px;

  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  outline: none;

  :hover {
    opacity: 0.85;
  }
  border-radius: 6px;
`

const DropDownItem = styled.option``

const SortVisualizerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`

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
`

const PrimaryButton = styled.button`
  font-size: 16px;
  padding: 8px;
  min-width: 75px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};

  :hover {
    opacity: 0.85;
  }
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  border-radius: 6px;
`

const ThemeLogo = styled.div`
  width: 32px;
  height: 32px;
  :hover {
    opacity: 0.55;
  }
  align-self: center;
`
const GithubIcon = styled(GithubLogo)`
  width: 32px;
  height: 32px;
  margin: 0px 16px;
  :hover {
    opacity: 0.55;
  }
`

const Link = styled.a`
  text-decoration: none;
`

export {
  Container,
  Header,
  HeaderTitle,
  Content,
  ToolBar,
  DropDown,
  DropDownItem,
  SortVisualizerContainer,
  Input,
  PrimaryButton,
  ThemeLogo,
  Link,
  FieldSet,
  FieldSetLegend,
  GithubIcon,
}
