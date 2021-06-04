import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  border: 1px solid yellow;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
`;

const Body = styled.body`
  background-color: ${({ theme }) => theme.colors.surface};
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

export { Container, Header, HeaderTitle, Body, Footer };
